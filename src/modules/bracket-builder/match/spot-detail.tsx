import { TrashIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import { SecondaryButton } from '~/components/ui/button';
import { useBracketStore } from '../builder/bracket-store';
import { AllParticipant } from '../types/builder-types';
import { LeaderboardSpot } from './spot-editor/leaderboard-spot';
import { ManualSeedSpot } from './spot-editor/manual-seed-spot';
import { PreviousRoundSpot } from './spot-editor/previous-round-spot';
import { QualifierSpot } from './spot-editor/qualifier-spot';

export interface SpotDetailProps {
  index: number;
  matchIndex: number;
  roundIndex: number;
  spot: AllParticipant;
}

export function SpotDetail({ index, matchIndex, roundIndex, spot }: SpotDetailProps) {
  const updateMatchSpotDetails = useBracketStore(state => state.updateMatchSpotDetails);
  const removePlayerFromMatch = useBracketStore(state => state.removePlayerFromMatch);

  const renderSpots = () => {
    switch (spot.spotType) {
      case 'round_challenge_participant': {
        return (
          <QualifierSpot
            spot={spot}
            onChange={value => updateMatchSpotDetails(roundIndex, matchIndex, index, value)}
          />
        );
      }
      case 'match_participant': {
        return (
          <PreviousRoundSpot
            spot={spot}
            onChange={value => updateMatchSpotDetails(roundIndex, matchIndex, index, value)}
          />
        );
      }
      case 'competition_participant': {
        return (
          <ManualSeedSpot
            spot={spot}
            onChange={value => updateMatchSpotDetails(roundIndex, matchIndex, index, value)}
          />
        );
      }
      case 'competition_leaderboard': {
        return (
          <LeaderboardSpot
            spot={spot}
            onChange={value => updateMatchSpotDetails(roundIndex, matchIndex, index, value)}
          />
        );
      }
      default: {
        return <span>Unknown spot</span>;
      }
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2 flex-1">
        <div className="pointer-events-none text-center min-w-[24px]">
          <span className="text-gray-500">{index + 1}</span>
        </div>
        <div className="flex items-center space-x-2 flex-1">{renderSpots()}</div>
      </div>
      <div className="ml-2">
        <SecondaryButton
          color="red"
          icon={TrashIcon}
          iconOnly
          onClick={() => removePlayerFromMatch(roundIndex, matchIndex, index)}
        >
          Remove player
        </SecondaryButton>
      </div>
    </div>
  );
}
