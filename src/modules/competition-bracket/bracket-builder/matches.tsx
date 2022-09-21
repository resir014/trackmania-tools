import { produce } from 'immer';
import { roundsStore } from './rounds';

export function addMatchOnRound(index: number) {
  roundsStore.value = produce(roundsStore.value, draft => {
    draft[index].matchGeneratorData.matches.push({ spots: [], settings: [] });
  });
}

export function removeMatchFromRound(index: number, matchIndex: number) {
  roundsStore.value = produce(roundsStore.value, draft => {
    draft[index].matchGeneratorData.matches = draft[index].matchGeneratorData.matches.filter(
      match => match !== draft[index].matchGeneratorData.matches[matchIndex]
    );
  });
}

export function addPlayerToMatch(index: number, matchIndex: number, generatorType?: string) {
  roundsStore.value = produce(roundsStore.value, draft => {
    const match = draft[index].matchGeneratorData.matches[matchIndex];

    switch (generatorType) {
      case 'round_challenge_participant': {
        match.spots.push({
          spotType: 'round_challenge_participant',
          roundPosition: 0,
          rank: 1,
        });
        break;
      }
      case 'match_participant': {
        match.spots.push({
          spotType: 'match_participant',
          roundPosition: 0,
          matchPosition: 0,
          rank: 1,
        });
        break;
      }
      case 'competition_participant': {
        match.spots.push({
          spotType: 'competition_participant',
          seed: 1,
        });
        break;
      }
      case 'competition_leaderboard': {
        match.spots.push({
          spotType: 'competition_leaderboard',
          rank: 1,
        });
        break;
      }
      default: {
        match.spots.push({
          spotType: 'round_challenge_participant',
          roundPosition: 0,
          rank: 1,
        });
        break;
      }
    }
  });
}

export function removePlayerFromMatch(index: number, matchIndex: number, spotIndex: number) {
  roundsStore.value = produce(roundsStore.value, draft => {
    const match = draft[index].matchGeneratorData.matches[matchIndex];

    match.spots = match.spots.filter(
      spot => spot !== draft[index].matchGeneratorData.matches[matchIndex].spots[spotIndex]
    );
  });
}
