import { Helmet } from 'react-helmet-async';
import { SITE_ORIGIN, DEFAULT_PAGE_TITLE, DEFAULT_PAGE_DESCRIPTION } from '../seo/site';
import { PAGE_SEO_BY_PATH } from '../seo/pageMeta';
import { buildHomeJsonLd } from '../seo/homeJsonLd';

type Props = {
  pathname: string;
};

export function SeoHead({ pathname }: Props) {
  const entry = PAGE_SEO_BY_PATH[pathname];
  const title = entry?.title ?? DEFAULT_PAGE_TITLE;
  const description = entry?.description ?? DEFAULT_PAGE_DESCRIPTION;
  const canonical = `${SITE_ORIGIN}${pathname === '/' ? '/' : pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {pathname === '/' ? (
        <script type="application/ld+json">{JSON.stringify(buildHomeJsonLd())}</script>
      ) : null}
    </Helmet>
  );
}
