import * as React from 'react';
import { NextSeo } from 'next-seo';
import { DefaultLayout } from '~/components/default-layout';
import { BracketBuilder } from '~/modules/bracket-builder/bracket-builder';

export default function CompetitionBracketPage() {
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
        <BracketBuilder />
      </DefaultLayout>
    </>
  );
}
