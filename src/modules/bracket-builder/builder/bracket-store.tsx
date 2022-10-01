import create from 'zustand';
import { BracketStore, StructureBuilderV1 } from '../types/builder-types';
import { SpotTypeSelections } from '../types/store-types';
import {
  addMatchToRound,
  addPlayerToMatch,
  removeMatchFromRound,
  removePlayerFromMatch,
  updateMatchSpotDetails,
} from './matches-builder';
import {
  addNewRound,
  changeRoundName,
  clearAllRounds,
  clearMatchesInRound,
  removeRound,
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
    set(addNewRound(spotType));
  },
  removeRound(index) {
    set(removeRound(index));
  },
  clearAllRounds() {
    set(clearAllRounds());
  },
  changeRoundName(index, name) {
    set(changeRoundName(index, name));
  },
  clearMatchesInRound(index) {
    set(clearMatchesInRound(index));
  },
  addMatchToRound(index) {
    set(addMatchToRound(index));
  },
  removeMatchFromRound(index, matchIndex) {
    set(removeMatchFromRound(index, matchIndex));
  },
  addPlayerToMatch(index, matchIndex, generatorType) {
    set(addPlayerToMatch(index, matchIndex, generatorType));
  },
  removePlayerFromMatch(index, matchIndex, spotIndex) {
    set(removePlayerFromMatch(index, matchIndex, spotIndex));
  },
  updateMatchSpotDetails(index, matchIndex, spotIndex, detail) {
    set(updateMatchSpotDetails(index, matchIndex, spotIndex, detail));
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
