import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import SimpleBar from 'simplebar-react';
import create from 'zustand';
import { useBracketStore } from '../builder/bracket-store';
import { MatchDetail } from '../match/match-detail';
import { type AllSpotTypes, type BuilderRoundDetail } from '../types/builder-types';
import { RoundNameEditor } from './round-name-editor';
import { RoundPlacementSelector } from './round-placement-selector';
import { SecondaryButton } from '~/components/ui/button';
import { useConfirmDialog } from '~/components/ui/confirm-dialog';
import { Tooltip } from '~/components/ui/tooltip';

export interface PlacementStore {
  spotType: AllSpotTypes;
  setSpotType: (type: AllSpotTypes) => void;
}

const usePlacementStore = create<PlacementStore>(set => ({
  spotType: 'round_challenge_participant',
  setSpotType: (type: AllSpotTypes) => set({ spotType: type }),
}));

export interface RoundDetailProps {
  index: number;
  round: BuilderRoundDetail;
}

export function RoundDetail({ index, round }: RoundDetailProps) {
  const { defaultSpotType, changeRoundName, removeRound, addMatchToRound, setRoundDefaultSpotType } = useBracketStore(
    state => ({
      defaultSpotType: state.rounds[index].defaultSpotType,
      changeRoundName: state.changeRoundName,
      removeRound: state.removeRound,
      addMatchToRound: state.addMatchToRound,
      setRoundDefaultSpotType: state.setRoundDefaultSpotType,
    }),
  );
  const setSpotType = usePlacementStore(state => state.setSpotType);

  const { confirm } = useConfirmDialog();

  const handlePlacementChange = (value: string) => {
    setSpotType(value as AllSpotTypes);
    setRoundDefaultSpotType(index, value as AllSpotTypes);
  };

  const handleRemoveRound = async () => {
    const confirmed = await confirm({
      title: 'Remove round',
      message: 'Are you sure you want to remove this round? This is irreversible!',
      confirmText: 'Delete',
      cancelText: 'Cancel',
    });

    if (confirmed) {
      removeRound(index);
    }
  };

  return (
    <div className="shrink-0 basis-full rounded-md bg-gray-950 shadow-md md:basis-6/12 lg:basis-4/12">
      <div className="border-b border-gray-700 px-4 py-2 xl:flex xl:items-center xl:justify-between">
        <div className="min-w-0 flex-1">
          <RoundNameEditor initialValue={round.name} onChange={name => changeRoundName(index, name)} />
        </div>
        <div className="mt-4 flex xl:mt-0 xl:ml-4">
          <div className="flex items-center space-x-2">
            <RoundPlacementSelector defaultValue={defaultSpotType} onChange={handlePlacementChange} />
            <Tooltip content="Add match">
              <SecondaryButton icon={PlusIcon} iconOnly onClick={() => addMatchToRound(index)}>
                Add match
              </SecondaryButton>
            </Tooltip>
            <Tooltip content="Remove round">
              <SecondaryButton color="red" icon={TrashIcon} iconOnly onClick={handleRemoveRound}>
                Remove round
              </SecondaryButton>
            </Tooltip>
          </div>
        </div>
      </div>
      <SimpleBar className="h-[600px]">
        <div className="p-4">
          <div className="grid grid-cols-1 gap-4">
            {round.matchGeneratorData.matches.map((match, matchIndex) => (
              <MatchDetail
                key={`${matchIndex}`}
                index={matchIndex}
                roundIndex={index}
                match={match}
                generatorType={defaultSpotType}
              />
            ))}
          </div>
        </div>
      </SimpleBar>
    </div>
  );
}
