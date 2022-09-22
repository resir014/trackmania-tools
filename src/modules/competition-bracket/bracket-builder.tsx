import { ArrowDownTrayIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import { Page } from '~/components/page';
import { PageContent } from '~/components/page-content';
import { PageHeader } from '~/components/page-header';
import { PrimaryButton } from '~/components/ui/button';
import { bracketStore, generatedJson } from './builder/bracket-store';
import { addNewRound } from './builder/rounds-builder';
import { AddNewRoundButton } from './components/add-new-round-button';
import { RoundDetail } from './round/round-detail';

export function BracketBuilder() {
  return (
    <Page subBrand="Competition bracket">
      <PageContent className="sm:py-12">
        <div className="container mx-auto space-y-8">
          <PageHeader
            pageTitle="Bracket builder"
            actions={
              <div className="flex items-center space-x-4">
                <PrimaryButton icon={ArrowDownTrayIcon} color="blue">
                  Get structure file
                </PrimaryButton>
                <PrimaryButton icon={QuestionMarkCircleIcon} color="gray">
                  About
                </PrimaryButton>
              </div>
            }
          />
          <div className="flex relative gap-6 flex-col xl:flex-row xl:w-full xl:h-full xl:pt-7 xl:pb-14 xl:overflow-x-auto">
            {bracketStore.value.map((round, index) => (
              <RoundDetail key={`${index}_${round.name}`} index={index} round={round} />
            ))}
            <AddNewRoundButton onCreateRound={spotType => addNewRound(spotType)} />
          </div>
          <pre className="overflow-x-auto">{`${JSON.stringify(generatedJson.value, null, 2)}`}</pre>
        </div>
      </PageContent>
    </Page>
  );
}
