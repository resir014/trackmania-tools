import { ArrowLeftCircleIcon, ChartBarIcon, CheckCircleIcon, HashtagIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import * as React from 'react';
import { type AllSpotTypes } from '../types/builder-types';
import { SecondaryButton } from '~/components/ui/button';
import { FormLabel } from '~/components/ui/forms/form-label';
import { InputSelect } from '~/components/ui/forms/input-select';

export interface AddNewRoundButtonProps {
  className?: string;
  onCreateRound?: (spotType: AllSpotTypes) => void;
}

const tabs = [
  { value: 'solo', label: 'Solo Event' },
  { value: 'team', label: 'Team Event' },
];

export function AddNewRoundButton({ className, onCreateRound }: AddNewRoundButtonProps) {
  const [activeTab, setActiveTab] = React.useState<string>('solo');

  const isCurrentTab = React.useCallback(
    (tab: string) => {
      return tab === activeTab;
    },
    [activeTab],
  );

  const handleClick = (spotType: AllSpotTypes) => () => {
    if (onCreateRound) {
      onCreateRound(spotType);
    }
  };

  const handleTabChange = React.useCallback(
    (value: string) => {
      if (tabs.find(item => item.value === value)) {
        setActiveTab(value);
      }
    },
    [setActiveTab],
  );

  const renderTabContents = (tabItem: string) => {
    switch (tabItem) {
      case 'solo': {
        return (
          <>
            <SecondaryButton
              block
              color="gray"
              icon={CheckCircleIcon}
              onClick={handleClick('round_challenge_participant')}
            >
              From Qualifiers
            </SecondaryButton>
            <SecondaryButton block color="gray" icon={ArrowLeftCircleIcon} onClick={handleClick('match_participant')}>
              From Previous Round
            </SecondaryButton>
            <SecondaryButton block color="gray" icon={HashtagIcon} onClick={handleClick('competition_participant')}>
              From Seed
            </SecondaryButton>
            <SecondaryButton block color="gray" icon={ChartBarIcon} onClick={handleClick('competition_leaderboard')}>
              From Leaderboard
            </SecondaryButton>
          </>
        );
      }
      case 'team': {
        return (
          <>
            <SecondaryButton
              block
              color="gray"
              icon={ArrowLeftCircleIcon}
              onClick={handleClick('team_match_participant')}
            >
              From Previous Round
            </SecondaryButton>
            <SecondaryButton block color="gray" icon={HashtagIcon} onClick={handleClick('competition_team')}>
              From Seed
            </SecondaryButton>
          </>
        );
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div
      className={clsx(
        'shrink-0 basis-full rounded-md bg-gray-950 shadow-md md:basis-6/12 lg:basis-4/12 xl:min-h-[655px]',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg leading-[38px] font-semibold">Add round</h3>
        </div>
        <PlusIcon className="h-6 w-6 text-white" aria-hidden />
      </div>
      <div className="p-4">
        <div className="mb-4 space-y-1 sm:hidden">
          <FormLabel htmlFor="eventType">Select Event Type</FormLabel>
          <InputSelect
            id="eventType"
            name="eventType"
            onChange={e => handleTabChange(e.target.value)}
            value={activeTab}
          >
            {tabs.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </InputSelect>
        </div>
        <div className="mb-4 hidden sm:block">
          <nav className="flex rounded-md bg-gray-900 p-1" aria-label="Tabs">
            {tabs.map(tab => (
              <button
                key={tab.label}
                className={clsx(
                  isCurrentTab(tab.value) ? 'bg-gray-800 text-gray-100 shadow-md' : 'hover:bgxt-gray-600 text-gray-100',
                  'flex-1 rounded-md px-3 py-2 text-sm font-medium',
                )}
                onClick={() => handleTabChange(tab.value)}
                aria-current={isCurrentTab(tab.value) ? 'page' : undefined}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="space-y-4">{renderTabContents(activeTab)}</div>
      </div>
    </div>
  );
}
