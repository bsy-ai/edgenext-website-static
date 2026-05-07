import { Helmet } from 'react-helmet-async';
import { SITE_ORIGIN } from './site';
import type { BlogPost } from '../pages/BLOG/utils/blogUtils';

type Props = {
  blogPost: BlogPost;
};

/**
 * 为 BlogDetail 页面注入 SEO 相关的 <head> 标签：
 * - title / description / canonical / robots
 * - Open Graph & Twitter Card
 * - BlogPosting JSON-LD（所有字段从 blogPost 自动派生）
 * - FAQPage JSON-LD（仅当 blogPost.seo.faq 有内容时输出）
 *
 * 单篇文章可在 blogs.json 里通过可选的 `seo` 字段精修；不写就走默认值。
 *
 * 注意：本文件位于 src/seo/ 下，已在 i18n 扫描器的忽略列表里，
 * 因此其中的 SEO 字符串字面量不会被 window.t() 包裹替换。
 */
export function BlogArticleSeo({ blogPost }: Props) {
  const canonicalUrl = `${SITE_ORIGIN}/resources/blog/${blogPost.slug}`;
  const seo = blogPost.seo;

  const metaTitle = seo?.metaTitle?.trim() || `${blogPost.title} | EdgeNext`;
  const metaDescription = seo?.metaDescription?.trim() || blogPost.description;
  const ogTitle = seo?.ogTitle?.trim() || blogPost.title;
  const ogDescription = seo?.ogDescription?.trim() || metaDescription;
  const twitterTitle = seo?.twitterTitle?.trim() || blogPost.title;
  const twitterDescription = seo?.twitterDescription?.trim() || metaDescription;

  // 把 yyyy-MM-dd 拼成完整 ISO 8601，让 article:published_time 更规范
  const publishedAtIso = /^\d{4}-\d{2}-\d{2}$/.test(blogPost.date)
    ? `${blogPost.date}T00:00:00Z`
    : blogPost.date;

  const ogImageUrl = blogPost.thumbnail
    ? blogPost.thumbnail.startsWith('http')
      ? blogPost.thumbnail
      : `${SITE_ORIGIN}${blogPost.thumbnail}`
    : undefined;

  // BlogPosting JSON-LD：基础字段全部从已有数据派生
  const blogPostingJsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blogPost.title,
    description: metaDescription,
    datePublished: blogPost.date,
    dateModified: blogPost.date,
    author: {
      '@type': 'Organization',
      name: 'EdgeNext',
      url: SITE_ORIGIN,
    },
    publisher: {
      '@type': 'Organization',
      name: 'EdgeNext',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };
  if (ogImageUrl) {
    blogPostingJsonLd.image = ogImageUrl;
  }

  // FAQPage JSON-LD：仅在 seo.faq 有有效条目时输出
  const faqItems = (seo?.faq ?? []).filter(
    (item) => item?.q?.trim() && item?.a?.trim()
  );
  const faqJsonLd =
    faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large"
      />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonicalUrl} />
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      <meta property="article:published_time" content={publishedAtIso} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}

      <script type="application/ld+json">
        {JSON.stringify(blogPostingJsonLd)}
      </script>
      {faqJsonLd && (
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      )}
    </Helmet>
  );
}
