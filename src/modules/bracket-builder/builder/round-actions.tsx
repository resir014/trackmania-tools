import { produce } from 'immer';
import {
  AllSpotTypes,
  BracketStore,
  BuilderRoundDetail,
  StructureBuilderV1,
} from '../types/builder-types';

export function importBracketDataAction(structure: StructureBuilderV1) {
  return produce((state: BracketStore) => {
    const { rounds } = structure;
    state.rounds = rounds.map((round, index) => ({
      ...round,
      name: round.name ?? `Round ${index + 1}`,
    }));
  });
}

export function addNewRoundAction(spotType?: AllSpotTypes) {
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

export function removeRoundAction(index: number) {
  return produce((state: BracketStore) => {
    state.rounds = state.rounds.filter(item => item !== state.rounds[index]);
  });
}

export function clearAllRoundsAction() {
  return produce((state: BracketStore) => {
    state.rounds = [];
  });
}

export function changeRoundNameAction(index: number, name: string) {
  return produce((state: BracketStore) => {
    state.rounds[index].name = name;
  });
}

export function clearMatchesInRoundAction(index: number) {
  return produce((state: BracketStore) => {
    state.rounds[index].matchGeneratorData.matches = [];
  });
}

export function setRoundDefaultSpotTypeAction(index: number, spotType: AllSpotTypes) {
  return produce((state: BracketStore) => {
    state.rounds[index].defaultSpotType = spotType;
  });
}
