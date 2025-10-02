import { lazy, Suspense } from 'react';
import type { Route } from '../+types/root';
import { Page } from '~/components/page';
import { LoadingPlaceholder } from '~/components/ui/loading';
import siteMetadata from '~/data/site-metadata';

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Bracket Builder · ${siteMetadata.title}` },
    {
      name: 'description',
      content: 'A supplementary tool to generate brackets for the official Trackmania competition tool.',
    },
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
