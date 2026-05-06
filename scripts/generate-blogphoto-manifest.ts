#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import { parseJsonBlogData, findMatchingPhotoName } from '../src/pages/BLOG/utils/jsonDataParser.js';

type PhotoCandidate = {
  name: string;
  relPath: string; // /blogphoto/xxx.ext
  base: string; // filename without extension (original casing)
  baseKey: string; // normalized base for lookup
  ext: string; // lowercased without dot
};

type PostMatch = {
  slug: string;
  title: string;
  thumbnailGuess: string;
  candidateBases: string[];
  matchedBaseKey?: string;
  chosen?: string; // relPath
  candidates?: string[]; // relPaths
  reason:
    | 'matched'
    | 'override'
    | 'no_photo_found'
    | 'ambiguous_multiple_candidates';
};

const EXT_PRIORITY = ['webp', 'jpg', 'jpeg', 'png', 'gif'];

function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

function getBaseFromRel(p: string): string {
  const file = p.split('/').pop() || p;
  return file.replace(/\.[^.]+$/, '');
}

function extOf(name: string): string {
  const i = name.lastIndexOf('.');
  return i === -1 ? '' : name.slice(i + 1).toLowerCase();
}

function pickByExtPriority(cands: PhotoCandidate[]): PhotoCandidate {
  const sorted = [...cands].sort((a, b) => {
    const ai = EXT_PRIORITY.indexOf(a.ext);
    const bi = EXT_PRIORITY.indexOf(b.ext);
    const ar = ai === -1 ? 999 : ai;
    const br = bi === -1 ? 999 : bi;
    return ar - br || a.name.localeCompare(b.name);
  });
  return sorted[0];
}

async function main() {
  const photoDir = path.join(process.cwd(), 'public', 'blogphoto');
  const outDir = path.join(process.cwd(), 'scripts', 'out');
  await fs.ensureDir(outDir);

  const manifestOut = path.join(
    process.cwd(),
    'src',
    'pages',
    'BLOG',
    'content',
    'blogs',
    'blog-photo-manifest.json'
  );

  // 手工覆盖：允许直接在 manifest 里指定 slug -> /blogphoto/xxx.ext
  const existingManifest: Record<string, string> = (await fs.pathExists(manifestOut))
    ? await fs.readJson(manifestOut)
    : {};

  const photoFiles = await glob('**/*.{png,jpg,jpeg,webp,gif}', {
    cwd: photoDir,
    nodir: true,
    posix: true,
  });

  const photos: PhotoCandidate[] = photoFiles.map((rel) => {
    const name = path.posix.basename(rel);
    const ext = extOf(name);
    const base = name.replace(/\.[^.]+$/, '');
    const relPath = `/blogphoto/${name}`;
    return {
      name,
      relPath,
      base,
      baseKey: base.toLowerCase(),
      ext,
    };
  });

  const byBaseKey = new Map<string, PhotoCandidate[]>();
  for (const p of photos) {
    const list = byBaseKey.get(p.baseKey) ?? [];
    list.push(p);
    byBaseKey.set(p.baseKey, list);
  }

  const photoSet = new Set(photos.map((p) => p.relPath));

  const posts = parseJsonBlogData();
  const used = new Set<string>(); // relPath
  const matches: PostMatch[] = [];

  for (const post of posts) {
    const override = existingManifest[post.slug];
    const thumbnailGuess = post.thumbnail;
    const guessBase = getBaseFromRel(thumbnailGuess);
    const photoNameMatch = findMatchingPhotoName(post.title) ?? undefined;

    const candidateBases = uniq(
      [
        guessBase,
        guessBase.toLowerCase(),
        post.slug,
        photoNameMatch,
        photoNameMatch?.toLowerCase(),
      ].filter(Boolean) as string[]
    );

    let matchedBaseKey: string | undefined;
    let chosen: PhotoCandidate | undefined;
    let reason: PostMatch['reason'] = 'no_photo_found';
    let candidates: PhotoCandidate[] | undefined;

    if (override && photoSet.has(override)) {
      used.add(override);
      matches.push({
        slug: post.slug,
        title: post.title,
        thumbnailGuess,
        candidateBases,
        matchedBaseKey: getBaseFromRel(override).toLowerCase(),
        chosen: override,
        candidates: [override],
        reason: 'override',
      });
      continue;
    }

    for (const base of candidateBases) {
      const key = base.toLowerCase();
      const c = byBaseKey.get(key);
      if (!c || c.length === 0) continue;

      matchedBaseKey = key;
      candidates = c;
      chosen = pickByExtPriority(c);
      reason = c.length > 1 ? 'ambiguous_multiple_candidates' : 'matched';
      break;
    }

    if (chosen) used.add(chosen.relPath);

    matches.push({
      slug: post.slug,
      title: post.title,
      thumbnailGuess,
      candidateBases,
      matchedBaseKey,
      chosen: chosen?.relPath,
      candidates: candidates?.map((x) => x.relPath),
      reason,
    });
  }

  const manifest: Record<string, string> = {};
  for (const m of matches) {
    if (m.chosen) manifest[m.slug] = m.chosen;
  }

  const unusedPhotos = photos
    .map((p) => p.relPath)
    .filter((p) => !used.has(p))
    .sort();

  const missingPosts = matches.filter((m) => !m.chosen);

  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalPosts: matches.length,
      totalPhotos: photos.length,
      matched: matches.filter((m) => m.reason === 'matched').length,
      overridden: matches.filter((m) => m.reason === 'override').length,
      ambiguous: matches.filter((m) => m.reason === 'ambiguous_multiple_candidates').length,
      missing: missingPosts.length,
      unusedPhotos: unusedPhotos.length,
    },
    matches,
    missingPosts,
    unusedPhotos,
  };

  await fs.writeJson(manifestOut, manifest, { spaces: 2 });

  const reportOut = path.join(outDir, 'blogphoto-report.json');
  await fs.writeJson(reportOut, report, { spaces: 2 });

  console.log(`[blogphoto] photos: ${photos.length}`);
  console.log(`[blogphoto] posts: ${matches.length}`);
  console.log(`[blogphoto] manifest: ${manifestOut} (entries=${Object.keys(manifest).length})`);
  console.log(`[blogphoto] report: ${reportOut}`);
  console.log(`[blogphoto] missing posts: ${missingPosts.length}`);
  console.log(`[blogphoto] unused photos: ${unusedPhotos.length}`);
}

main().catch((err) => {
  console.error('[blogphoto] Failed:', err);
  process.exitCode = 1;
});

