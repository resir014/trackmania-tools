import * as React from 'react';
import { Page } from '~/components/page';
import { PageContent } from '~/components/page-content';
import { PageHeader } from '~/components/page-header';
import { bracketStore, generatedJson } from './builder/bracket-store';
import { addNewRound } from './builder/rounds-builder';
import { AddNewRoundButton } from './components/add-new-round-button';
import { RoundDetail } from './round/round-detail';

export function BracketBuilder() {
  return (
    <Page subBrand="Competition bracket">
      <PageContent className="sm:py-12">
        <div className="container mx-auto space-y-8">
          <PageHeader pageTitle="Bracket builder" />
          {bracketStore.value.map((round, index) => (
            <RoundDetail key={`${index}_${round.name}`} index={index} round={round} />
          ))}
          <AddNewRoundButton onCreateRound={() => addNewRound()} />
          <pre>{`${JSON.stringify(generatedJson.value, null, 2)}`}</pre>
        </div>
      </PageContent>
    </Page>
  );
}
