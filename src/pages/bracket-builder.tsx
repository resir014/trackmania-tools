import * as React from 'react';
import { NextSeo } from 'next-seo';
import { DefaultLayout } from '~/components/default-layout';
import { Page } from '~/components/page';
import dynamic from 'next/dynamic';
import { LoadingPlaceholder } from '~/components/ui/loading';

const BracketBuilderModule = dynamic(
  () => import('~/modules/bracket-builder/bracket-builder').then(mod => mod.BracketBuilder),
  {
    ssr: false,
    loading: () => <LoadingPlaceholder />,
  }
);

export default function BracketBuilderPage() {
  return (
    <>
      <NextSeo
        title="Bracket Builder"
        description="A supplementary tool to generate brackets for the official Trackmania competition tool."
        openGraph={{
          title: 'Bracket Builder',
          description:
            'A supplementary tool to generate brackets for the official Trackmania competition tool.',
        }}
      />
      <DefaultLayout>
        <Page subBrand="Bracket Builder">
          <BracketBuilderModule />
        </Page>
      </DefaultLayout>
    </>
  );
}
