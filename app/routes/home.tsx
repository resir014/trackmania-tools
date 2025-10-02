import type { Route } from './+types/home';
import siteMetadata from '~/data/site-metadata';
import { HomePage } from '~/modules/home/home-page';

export function meta({ location }: Route.MetaArgs) {
  return [
    { title: siteMetadata.title },
    { name: 'description', content: siteMetadata.description },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: siteMetadata.title },
    { name: 'twitter:creator', content: '@resir014' },
    { property: 'og:description', content: siteMetadata.description },
    { property: 'og:image', content: `${siteMetadata.siteUrl}/social.png` },
    { property: 'og:image:alt', content: siteMetadata.title },
    { property: 'og:image:width', content: 1200 },
    { property: 'og:image:height', content: 630 },
    { property: 'og:site_name', content: siteMetadata.title },
    { property: 'og:title', content: 'Home' },
    { property: 'og:url', content: `${siteMetadata.siteUrl}${location.pathname}` },
    { property: 'og:type', content: 'website' },
  ] satisfies Route.MetaDescriptors;
}

export default function Home() {
  return <HomePage />;
}
