import {
  ArrowLeftCircleIcon,
  ChartBarIcon,
  CheckCircleIcon,
  HashtagIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import * as React from 'react';
import { SecondaryButton } from '~/components/ui/button';
import { AllSpotTypes } from '../types/builder-types';

export interface AddNewRoundButtonProps {
  className?: string;
  onCreateRound?: (spotType: AllSpotTypes) => void;
}

export function AddNewRoundButton({ className, onCreateRound }: AddNewRoundButtonProps) {
  const handleClick = (spotType: AllSpotTypes) => () => {
    if (onCreateRound) {
      onCreateRound(spotType);
    }
  };

  return (
    <div
      className={clsx(
        'shrink-0 basis-full md:basis-6/12 lg:basis-4/12 xl:min-h-[655px] bg-black shadow-md rounded-tl-md rounded-br-md',
        className
      )}
    >
      <div className="md:flex md:items-center md:justify-between px-4 py-2 border-b border-gray-700">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold leading-[38px]">Add round</h3>
        </div>
        <PlusIcon className="text-white w-6 h-6" aria-hidden />
      </div>
      <div className="p-4">
        <div className="space-y-4">
          <SecondaryButton
            block
            color="gray"
            icon={CheckCircleIcon}
            onClick={handleClick('round_challenge_participant')}
          >
            From Qualifiers
          </SecondaryButton>
          <SecondaryButton
            block
            color="gray"
            icon={ArrowLeftCircleIcon}
            onClick={handleClick('match_participant')}
          >
            From Previous Round
          </SecondaryButton>
          <SecondaryButton
            block
            color="gray"
            icon={HashtagIcon}
            onClick={handleClick('competition_participant')}
          >
            From Seed
          </SecondaryButton>
          <SecondaryButton
            block
            color="gray"
            icon={ChartBarIcon}
            onClick={handleClick('competition_leaderboard')}
          >
            From Leaderboard
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
