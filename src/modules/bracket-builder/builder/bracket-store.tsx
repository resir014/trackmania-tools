import create from 'zustand';
import { BracketStore, StructureBuilderV1 } from '../types/builder-types';
import { SpotTypeSelections } from '../types/store-types';
import {
  addMatchToRoundAction,
  addPlayerToMatchAction,
  removeMatchFromRoundAction,
  removePlayerFromMatchAction,
  updateMatchSpotDetailsAction,
} from './matches-actions';
import {
  addNewRoundAction,
  changeRoundNameAction,
  clearAllRoundsAction,
  clearMatchesInRoundAction,
  removeRoundAction,
} from './round-actions';

export const spotTypeSelections: SpotTypeSelections[] = [
  { label: 'Qualifier', value: 'round_challenge_participant' },
  { label: 'Previous round', value: 'match_participant' },
  { label: 'Manual seed', value: 'competition_participant' },
  { label: 'Leaderboard', value: 'competition_leaderboard' },
];

export const useBracketStore = create<BracketStore>(set => ({
  rounds: [],
  addNewRound(spotType) {
    set(addNewRoundAction(spotType));
  },
  removeRound(index) {
    set(removeRoundAction(index));
  },
  clearAllRounds() {
    set(clearAllRoundsAction());
  },
  changeRoundName(index, name) {
    set(changeRoundNameAction(index, name));
  },
  clearMatchesInRound(index) {
    set(clearMatchesInRoundAction(index));
  },
  addMatchToRound(index) {
    set(addMatchToRoundAction(index));
  },
  removeMatchFromRound(index, matchIndex) {
    set(removeMatchFromRoundAction(index, matchIndex));
  },
  addPlayerToMatch(index, matchIndex, generatorType) {
    set(addPlayerToMatchAction(index, matchIndex, generatorType));
  },
  removePlayerFromMatch(index, matchIndex, spotIndex) {
    set(removePlayerFromMatchAction(index, matchIndex, spotIndex));
  },
  updateMatchSpotDetails(index, matchIndex, spotIndex, detail) {
    set(updateMatchSpotDetailsAction(index, matchIndex, spotIndex, detail));
  },
}));

export function useGeneratedJSON() {
  const rounds = useBracketStore(store => store.rounds);

  return {
    version: 1,
    // Clean up the `defaultSpotType` from the final object.
    rounds: rounds.map(({ name, matchGeneratorType, matchGeneratorData }) => ({
      name,
      matchGeneratorType,
      matchGeneratorData,
    })),
  } as StructureBuilderV1;
}
