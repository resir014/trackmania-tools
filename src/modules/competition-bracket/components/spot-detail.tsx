import { TrashIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import { SecondaryButton } from '~/components/ui/button';
import { removePlayerFromMatch } from '../bracket-builder/matches';
import { AllParticipant } from '../types/builder-types';

export interface SpotDetailProps {
  index: number;
  matchIndex: number;
  roundIndex: number;
  spot: AllParticipant;
}

export function SpotDetail({ index, matchIndex, roundIndex, spot }: SpotDetailProps) {
  const renderSpots = () => {
    switch (spot.spotType) {
      case 'round_challenge_participant': {
        return (
          <div className="flex items-center space-x-2">
            <div>
              <label htmlFor="roundPosition" className="sr-only">
                Round position
              </label>
              <input
                type="text"
                inputMode="numeric"
                name="roundPosition"
                id="roundPosition"
                placeholder="Round pos."
                className="inline-block w-full max-w-[128px] rounded-md bg-black text-white border-gray-700 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                value={spot.roundPosition}
              />
            </div>
            <div>
              <label htmlFor="rank" className="sr-only">
                Rank
              </label>
              <input
                type="text"
                inputMode="numeric"
                name="rank"
                id="rank"
                placeholder="Rank"
                className="inline-block w-full max-w-[128px] rounded-md bg-black text-white border-gray-700 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                value={spot.rank}
              />
            </div>
          </div>
        );
      }
      case 'match_participant': {
        return (
          <div className="flex items-center space-x-2">
            <div>
              <label htmlFor="roundPosition" className="sr-only">
                Round position
              </label>
              <input
                type="text"
                inputMode="numeric"
                name="roundPosition"
                id="roundPosition"
                placeholder="Round pos."
                className="inline-block w-full max-w-[128px] rounded-md bg-black text-white border-gray-700 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                value={spot.roundPosition}
              />
            </div>
            <div>
              <label htmlFor="roundPosition" className="sr-only">
                Match position
              </label>
              <input
                type="text"
                inputMode="numeric"
                name="roundPosition"
                id="roundPosition"
                placeholder="Round pos."
                className="inline-block w-full max-w-[128px] rounded-md bg-black text-white border-gray-700 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                value={spot.matchPosition}
              />
            </div>
            <div>
              <label htmlFor="rank" className="sr-only">
                Rank
              </label>
              <input
                type="text"
                inputMode="numeric"
                name="rank"
                id="rank"
                placeholder="Rank"
                className="inline-block w-full max-w-[128px] rounded-md bg-black text-white border-gray-700 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                value={spot.rank}
              />
            </div>
          </div>
        );
      }
      case 'competition_participant': {
        return (
          <div className="flex items-center space-x-2">
            <div>
              <label htmlFor="seed" className="sr-only">
                Seed
              </label>
              <input
                type="text"
                inputMode="numeric"
                name="seed"
                id="seed"
                placeholder="Seed"
                className="inline-block w-full max-w-[128px] rounded-md bg-black text-white border-gray-700 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                value={spot.seed}
              />
            </div>
          </div>
        );
      }
      case 'competition_leaderboard': {
        return (
          <div className="flex items-center space-x-2">
            <div>
              <label htmlFor="rank" className="sr-only">
                Rank
              </label>
              <input
                type="text"
                inputMode="numeric"
                name="rank"
                id="rank"
                placeholder="Rank"
                className="inline-block w-full max-w-[128px] rounded-md bg-black text-white border-gray-700 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                value={spot.rank}
              />
            </div>
          </div>
        );
      }
      default: {
        return <span>Unknown spot</span>;
      }
    }
  };

  return (
    <div className="flex items-center justify-between p-2">
      {renderSpots()}
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
