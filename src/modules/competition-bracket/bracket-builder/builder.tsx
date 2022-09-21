import { computed } from '@preact/signals-react';
import { AllParticipant, StructureBuilderV1 } from '../types/builder-types';
import { roundsStore } from './rounds';

export type SpotTypeSelections = {
  label: string;
  value: AllParticipant['spotType'];
};

export const spotTypeSelections: SpotTypeSelections[] = [
  { label: 'Qualifier', value: 'round_challenge_participant' },
  { label: 'Previous round', value: 'match_participant' },
  { label: 'Manual seed', value: 'competition_participant' },
  { label: 'Leaderboard', value: 'competition_leaderboard' },
];

export const generatedJson = computed<StructureBuilderV1>(() => ({
  version: 1,
  rounds: roundsStore.value,
}));
