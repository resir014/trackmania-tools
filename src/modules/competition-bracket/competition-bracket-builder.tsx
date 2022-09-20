import { PlusIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import { Page } from '~/components/page';
import { PageContent } from '~/components/page-content';
import { PageHeader } from '~/components/page-header';
import { PrimaryButton } from '~/components/ui/button';
import { AddNewRoundButton } from './components/add-new-round-button';
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
        <div className="container mx-auto space-y-8">
          <PageHeader pageTitle="Bracket builder" />
          {rounds.map(round => (
            <div
              key={round.name}
              className="bg-black rounded-tl-2xl rounded-br-2xl overflow-hidden"
            >
              <div className="md:flex md:items-center md:justify-between px-4 py-2 border-b border-gray-700">
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold leading-8 sm:truncate">{round.name}</h3>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                  <PrimaryButton size="sm" icon={PlusIcon}>
                    Add match
                  </PrimaryButton>
                </div>
              </div>
              <div className="px-4 py-4">h</div>
            </div>
          ))}
          <AddNewRoundButton />
        </div>
      </PageContent>
    </Page>
  );
}
