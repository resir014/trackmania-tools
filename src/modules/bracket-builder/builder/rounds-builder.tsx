import { produce } from 'immer';
import { AllSpotTypes, BuilderRoundDetail } from '../types/builder-types';
import { bracketStore } from './bracket-store';

export function addNewRound(spotType?: AllSpotTypes) {
  const roundData: BuilderRoundDetail = {
    name: `Round ${bracketStore.value.length + 1}`,
    matchGeneratorType: 'spot_filler',
    matchGeneratorData: {
      matches: [],
    },
    defaultSpotType: spotType,
  };

  bracketStore.value = produce(bracketStore.value, draft => {
    draft.push(roundData);
  });
}

export function removeRound(index: number) {
  bracketStore.value = bracketStore.value.filter(item => item !== bracketStore.value[index]);
}

export function clearAllRounds() {
  bracketStore.value = [];
}

export function changeRoundName(index: number, name: string) {
  bracketStore.value = produce(bracketStore.value, draft => {
    draft[index].name = name;
  });
}

export function clearMatchesInRound(index: number) {
  bracketStore.value = produce(bracketStore.value, draft => {
    draft[index].matchGeneratorData.matches = [];
  });
}