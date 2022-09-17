import * as React from 'react';
import { NextSeo } from 'next-seo';
import { DefaultLayout } from '~/components/default-layout';
import { CompetitionBracketBuilder } from '~/modules/competition-bracket/competition-bracket-builder';

export default function CompetitionBracketPage() {
  return (
    <>
      <NextSeo title="Competition bracket" openGraph={{ title: 'Competition bracket' }} />
      <DefaultLayout>
        <CompetitionBracketBuilder />
      </DefaultLayout>
    </>
  );
}
