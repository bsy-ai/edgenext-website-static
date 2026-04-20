#!/usr/bin/env node
/**
 * Copies newsroom JSON from src to public before vite build.
 * Vite then copies public/ to dist, so the file is served at /data/newsroom.json.
 */
import fs from 'fs-extra';
import path from 'path';

const cwd = process.cwd();
const src = path.join(cwd, 'src/pages/NEWS/content/newsroom.json');
const destDir = path.join(cwd, 'public/data');
const dest = path.join(destDir, 'newsroom.json');

async function main(): Promise<void> {
  try {
    const exists = await fs.pathExists(src);
    if (!exists) {
      console.error(`[copy-newsroom] Source missing: ${src}`);
      process.exit(1);
    }

    await fs.ensureDir(destDir);
    await fs.copy(src, dest, { overwrite: true });
    console.log(`[copy-newsroom] ${src} -> ${dest}`);
  } catch (err) {
    console.error('[copy-newsroom] Failed:', err);
    process.exit(1);
  }
}

main().catch((err: unknown) => {
  console.error('[copy-newsroom] Failed:', err);
  process.exit(1);
});
