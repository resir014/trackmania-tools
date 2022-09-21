import { signal } from '@preact/signals-react';
import { produce } from 'immer';
import { BuilderRoundDetail } from '../types/builder-types';

export const roundsStore = signal<BuilderRoundDetail[]>([]);

export function addNewRound() {
  const roundData: BuilderRoundDetail = {
    name: `Round ${roundsStore.value.length + 1}`,
    matchGeneratorType: 'spot_filler',
    matchGeneratorData: {
      matches: [],
    },
  };

  roundsStore.value = produce(roundsStore.value, draft => {
    draft.push(roundData);
  });
}

export function removeRound(index: number) {
  roundsStore.value = roundsStore.value.filter(item => item !== roundsStore.value[index]);
}

export function changeRoundName(index: number, name: string) {
  roundsStore.value = produce(roundsStore.value, draft => {
    draft[index].name = name;
  });
}

export function clearMatchesInRound(index: number) {
  roundsStore.value = produce(roundsStore.value, draft => {
    draft[index].matchGeneratorData.matches = [];
  });
}
