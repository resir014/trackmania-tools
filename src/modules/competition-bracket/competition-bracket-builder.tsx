import * as React from 'react';
import { Page } from '~/components/page';
import { PageContent } from '~/components/page-content';
import { PageHeader } from '~/components/page-header';
import { generatedJson } from './bracket-builder/builder';
import { addNewRound, roundsStore } from './bracket-builder/rounds';
import { AddNewRoundButton } from './components/add-new-round-button';
import { RoundDetail } from './components/round-detail';

export function CompetitionBracketBuilder() {
  return (
    <Page subBrand="Competition bracket">
      <PageContent className="sm:py-12">
        <div className="container mx-auto space-y-8">
          <PageHeader pageTitle="Bracket builder" />
          {roundsStore.value.map((round, index) => (
            <RoundDetail key={`${index}_${round.name}`} index={index} round={round} />
          ))}
          <AddNewRoundButton onCreateRound={() => addNewRound()} />
          <pre>{`${JSON.stringify(generatedJson.value, null, 2)}`}</pre>
        </div>
      </PageContent>
    </Page>
  );
}
