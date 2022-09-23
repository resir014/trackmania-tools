import create from 'zustand';
import {
  AllParticipant,
  AllSpotTypes,
  BracketStore,
  StructureBuilderV1,
} from '../types/builder-types';
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
  addNewRound(spotType?: AllSpotTypes) {
    set(addNewRound(spotType));
  },
  removeRound(index: number) {
    set(removeRound(index));
  },
  clearAllRounds() {
    set(clearAllRounds());
  },
  changeRoundName(index: number, name: string) {
    set(changeRoundName(index, name));
  },
  clearMatchesInRound(index: number) {
    set(clearMatchesInRound(index));
  },
  addMatchToRound(index: number) {
    set(addMatchToRound(index));
  },
  removeMatchFromRound(index, matchIndex) {
    set(removeMatchFromRound(index, matchIndex));
  },
  addPlayerToMatch(index, matchIndex, generatorType) {
    set(addPlayerToMatch(index, matchIndex, generatorType));
  },
  removePlayerFromMatch(index: number, matchIndex: number, spotIndex: number) {
    set(removePlayerFromMatch(index, matchIndex, spotIndex));
  },
  updateMatchSpotDetails(
    index: number,
    matchIndex: number,
    spotIndex: number,
    detail: AllParticipant
  ) {
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
