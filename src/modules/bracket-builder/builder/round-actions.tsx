import { produce } from 'immer';
import { AllSpotTypes, BracketStore, BuilderRoundDetail } from '../types/builder-types';

export function addNewRound(spotType?: AllSpotTypes) {
  return produce((state: BracketStore) => {
    const roundData: BuilderRoundDetail = {
      name: `Round ${state.rounds.length + 1}`,
      matchGeneratorType: 'spot_filler',
      matchGeneratorData: {
        matches: [],
      },
      defaultSpotType: spotType,
    };

    state.rounds.push(roundData);
  });
}

export function removeRound(index: number) {
  return produce((state: BracketStore) => {
    state.rounds = state.rounds.filter(item => item !== state.rounds[index]);
  });
}

export function clearAllRounds() {
  return produce((state: BracketStore) => {
    state.rounds = [];
  });
}

export function changeRoundName(index: number, name: string) {
  return produce((state: BracketStore) => {
    state.rounds[index].name = name;
  });
}

export function clearMatchesInRound(index: number) {
  return produce((state: BracketStore) => {
    state.rounds[index].matchGeneratorData.matches = [];
  });
}
