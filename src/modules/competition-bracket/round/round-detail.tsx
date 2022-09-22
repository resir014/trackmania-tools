import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useSignal } from '@preact/signals-react';
import * as React from 'react';
import { PrimaryButton, SecondaryButton } from '~/components/ui/button';
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
  const placementStore = useSignal<string>('round_challenge_participant');

  const handlePlacementChange = (value: string) => {
    placementStore.value = value;
    clearMatchesInRound(index);
  };

  return (
    <div className="bg-black rounded-tl-2xl rounded-br-2xl overflow-hidden">
      <div className="md:flex md:items-center md:justify-between px-4 py-2 border-b border-gray-700">
        <div className="min-w-0 flex-1">
          <RoundNameEditor
            initialValue={round.name}
            onChange={name => changeRoundName(index, name)}
          />
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <RoundPlacementSelector
            defaultValue={placementStore.value}
            onChange={handlePlacementChange}
          />
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <div className="space-x-4">
            <SecondaryButton color="red" icon={TrashIcon} onClick={() => removeRound(index)}>
              Remove round
            </SecondaryButton>
            <PrimaryButton icon={PlusIcon} onClick={() => addMatchOnRound(index)}>
              Add match
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
    </div>
  );
}
