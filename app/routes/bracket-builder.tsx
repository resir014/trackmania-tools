import { lazy, Suspense } from 'react';
import type { Route } from '../+types/root';
import { Page } from '~/components/page';
import { LoadingPlaceholder } from '~/components/ui/loading';
import siteMetadata from '~/data/site-metadata';

const metaTitle = 'Bracket Builder';
const metaDescription = 'A supplementary tool to generate brackets for the official Trackmania competition tool.';

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${metaTitle} · ${siteMetadata.title}` },
    { name: 'description', content: metaDescription },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: siteMetadata.title },
    { name: 'twitter:creator', content: '@resir014' },
    { property: 'og:description', content: metaDescription },
    { property: 'og:image', content: `${siteMetadata.siteUrl}/social.png` },
    { property: 'og:image:alt', content: siteMetadata.title },
    { property: 'og:image:width', content: 1200 },
    { property: 'og:image:height', content: 630 },
    { property: 'og:site_name', content: siteMetadata.title },
    { property: 'og:title', content: metaTitle },
    { property: 'og:url', content: `${siteMetadata.siteUrl}${location.pathname}` },
    { property: 'og:type', content: 'website' },
  ] satisfies Route.MetaDescriptors;
}

const BracketBuilderModule = lazy(() => import('~/modules/bracket-builder/bracket-builder'));

export function HydrateFallback() {
  return <LoadingPlaceholder />;
}

export default function BracketBuilder() {
  return (
    <Page subBrand="Bracket Builder">
      <Suspense fallback={<LoadingPlaceholder />}>
        <BracketBuilderModule />
      </Suspense>
    </Page>
  );
}
