import { TrashIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import { useBracketStore } from '../builder/bracket-store';
import { type AllParticipant } from '../types/builder-types';
import { LeaderboardSpot } from './spot-editor/leaderboard-spot';
import { ManualSeedSpot } from './spot-editor/manual-seed-spot';
import { PreviousRoundSpot } from './spot-editor/previous-round-spot';
import { QualifierSpot } from './spot-editor/qualifier-spot';
import { TeamPreviousRoundSpot } from './spot-editor/team-previous-round-spot';
import { TeamSeedSpot } from './spot-editor/team-seed-spot';
import { SecondaryButton } from '~/components/ui/button';
import { Tooltip } from '~/components/ui/tooltip';

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
          <QualifierSpot spot={spot} onChange={value => updateMatchSpotDetails(roundIndex, matchIndex, index, value)} />
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
      case 'competition_team': {
        return (
          <TeamSeedSpot spot={spot} onChange={value => updateMatchSpotDetails(roundIndex, matchIndex, index, value)} />
        );
      }
      case 'team_match_participant': {
        return (
          <TeamPreviousRoundSpot
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
      <div className="flex flex-1 items-center space-x-2">
        <div className="pointer-events-none min-w-[24px] text-center">
          <span className="text-gray-500">{index + 1}</span>
        </div>
        <div className="flex flex-1 items-center space-x-2">{renderSpots()}</div>
      </div>
      <div className="ml-2">
        <Tooltip content="Remove player">
          <SecondaryButton
            color="red"
            icon={TrashIcon}
            iconOnly
            onClick={() => removePlayerFromMatch(roundIndex, matchIndex, index)}
          >
            Remove player
          </SecondaryButton>
        </Tooltip>
      </div>
    </div>
  );
}
