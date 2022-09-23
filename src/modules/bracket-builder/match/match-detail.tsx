import { ClipboardDocumentIcon, TrashIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import { SecondaryButton } from '~/components/ui/button';
import { useBracketStore } from '../builder/bracket-store';
import { MatchSettingsData } from '../types/builder-types';
import { SpotDetail } from './spot-detail';

export interface MatchDetailProps {
  index: number;
  roundIndex: number;
  match: MatchSettingsData;
  generatorType?: string;
}

export function MatchDetail({ index, roundIndex, match, generatorType }: MatchDetailProps) {
  const addPlayerToMatch = useBracketStore(state => state.addPlayerToMatch);
  const removeMatchFromRound = useBracketStore(state => state.removeMatchFromRound);

  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-md font-semibold truncate">Match #{index + 1}</h3>
        </div>
        <div className="flex items-center space-x-1">
          <SecondaryButton
            color="red"
            size="xs"
            icon={TrashIcon}
            iconOnly
            onClick={() => removeMatchFromRound(roundIndex, index)}
          >
            Remove match
          </SecondaryButton>
          <SecondaryButton
            color="blue"
            size="xs"
            icon={ClipboardDocumentIcon}
            iconOnly
            onClick={() => addPlayerToMatch(roundIndex, index, generatorType)}
          >
            Add player to match
          </SecondaryButton>
        </div>
      </div>
      <div className="px-4 pt-2 pb-4 space-y-2">
        {match.spots.map((item, spotIndex) => (
          <SpotDetail
            key={spotIndex}
            index={spotIndex}
            matchIndex={index}
            roundIndex={roundIndex}
            spot={item}
          />
        ))}
      </div>
    </div>
  );
}
