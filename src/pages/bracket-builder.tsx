import * as React from 'react';
import { NextSeo } from 'next-seo';
import { DefaultLayout } from '~/components/default-layout';
import { Page } from '~/components/page';
import { BracketBuilder } from '~/modules/bracket-builder/bracket-builder';

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
          <BracketBuilder />
        </Page>
      </DefaultLayout>
    </>
  );
}
