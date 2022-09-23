import { computed, signal } from '@preact/signals-react';
import { BuilderRoundDetail, StructureBuilderV1 } from '../types/builder-types';
import { SpotTypeSelections } from '../types/store-types';

export const spotTypeSelections: SpotTypeSelections[] = [
  { label: 'Qualifier', value: 'round_challenge_participant' },
  { label: 'Previous round', value: 'match_participant' },
  { label: 'Manual seed', value: 'competition_participant' },
  { label: 'Leaderboard', value: 'competition_leaderboard' },
];

export const bracketStore = signal<BuilderRoundDetail[]>([]);

export const generatedJson = computed<StructureBuilderV1>(() => ({
  version: 1,
  // Clean up the `defaultSpotType` from the final object.
  rounds: bracketStore.value.map(({ name, matchGeneratorType, matchGeneratorData }) => ({
    name,
    matchGeneratorType,
    matchGeneratorData,
  })),
}));
