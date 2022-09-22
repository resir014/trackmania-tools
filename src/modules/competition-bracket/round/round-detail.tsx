import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useSignal } from '@preact/signals-react';
import * as React from 'react';
import SimpleBar from 'simplebar-react';
import { SecondaryButton } from '~/components/ui/button';
import { addMatchOnRound } from '../builder/matches-builder';
import { changeRoundName, clearMatchesInRound, removeRound } from '../builder/rounds-builder';
import { BuilderRoundDetail } from '../types/builder-types';
import { MatchDetail } from '../match/match-detail';
import { RoundNameEditor } from './round-name-editor';
import { RoundPlacementSelector } from './round-placement-selector';

export interface RoundDetailProps {
  index: number;
  round: BuilderRoundDetail;
}

export function RoundDetail({ index, round }: RoundDetailProps) {
  const placementStore = useSignal<string>(round.defaultSpotType ?? 'round_challenge_participant');

  const handlePlacementChange = (value: string) => {
    placementStore.value = value;
    clearMatchesInRound(index);
  };

  return (
    <div className="shrink-0 basis-full md:basis-6/12 lg:basis-4/12 bg-black shadow-md rounded-tl-md rounded-br-md">
      <div className="xl:flex xl:items-center xl:justify-between px-4 py-2 border-b border-gray-700">
        <div className="min-w-0 flex-1">
          <RoundNameEditor
            initialValue={round.name}
            onChange={name => changeRoundName(index, name)}
          />
        </div>
        <div className="mt-4 flex xl:mt-0 xl:ml-4">
          <div className="flex items-center space-x-2">
            <RoundPlacementSelector
              defaultValue={placementStore.value}
              onChange={handlePlacementChange}
            />
            <SecondaryButton icon={PlusIcon} iconOnly onClick={() => addMatchOnRound(index)}>
              Add match
            </SecondaryButton>
            <SecondaryButton
              color="red"
              icon={TrashIcon}
              iconOnly
              onClick={() => removeRound(index)}
            >
              Remove round
            </SecondaryButton>
          </div>
        </div>
      </div>
      <SimpleBar className="h-[640px]">
        <div className="p-4">
          <div className="grid gap-4 grid-cols-1">
            {round.matchGeneratorData.matches.map((match, matchIndex) => (
              <MatchDetail
                key={`${matchIndex}`}
                index={matchIndex}
                roundIndex={index}
                match={match}
                generatorType={placementStore.value}
              />
            ))}
          </div>
        </div>
      </SimpleBar>
    </div>
  );
}
