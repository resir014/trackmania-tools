import type { Route } from './+types/home';
import siteMetadata from '~/data/site-metadata';
import { HomePage } from '~/modules/home/home-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: siteMetadata.title },
    { name: 'description', content: siteMetadata.description },
  ] satisfies Route.MetaDescriptors;
}

export default function Home() {
  return <HomePage />;
}
