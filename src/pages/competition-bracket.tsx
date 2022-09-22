import * as React from 'react';
import { NextSeo } from 'next-seo';
import { DefaultLayout } from '~/components/default-layout';
import { BracketBuilder } from '~/modules/competition-bracket/bracket-builder';

export default function CompetitionBracketPage() {
  return (
    <>
      <NextSeo title="Competition bracket" openGraph={{ title: 'Competition bracket' }} />
      <DefaultLayout>
        <BracketBuilder />
      </DefaultLayout>
    </>
  );
}
