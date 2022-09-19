import * as React from 'react';
import { Page } from '~/components/page';
import { PageContent } from '~/components/page-content';
import { PrimaryButton } from '~/components/ui/button';
import { PageHeader } from './page-header';
import { BuilderRoundDetail } from './types/builder-types';

const rounds: BuilderRoundDetail[] = [
  {
    name: 'Round 1',
    matchGeneratorType: 'spot_filler',
    matchGeneratorData: {
      matches: [],
    },
  },
];

export function CompetitionBracketBuilder() {
  return (
    <Page subBrand="Competition bracket">
      <PageContent className="sm:py-12">
        <div className="container mx-auto space-y-4">
          <PageHeader
            pageTitle="Bracket builder"
            actions={
              <div className="space-x-4">
                <PrimaryButton>Add round</PrimaryButton>
              </div>
            }
          />
          {rounds.map(round => (
            <div key={round.name}>{round.name}</div>
          ))}
        </div>
      </PageContent>
    </Page>
  );
}
