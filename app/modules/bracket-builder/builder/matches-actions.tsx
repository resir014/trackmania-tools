import { produce } from 'immer';
import { type AllParticipant, type BracketStore } from '../types/builder-types';

export function addMatchToRoundAction(index: number) {
  return produce((state: BracketStore) => {
    state.rounds[index].matchGeneratorData.matches.push({ spots: [], settings: [] });
  });
}

export function removeMatchFromRoundAction(index: number, matchIndex: number) {
  return produce((state: BracketStore) => {
    state.rounds[index].matchGeneratorData.matches = state.rounds[index].matchGeneratorData.matches.filter(
      match => match !== state.rounds[index].matchGeneratorData.matches[matchIndex],
    );
  });
}

export function addPlayerToMatchAction(index: number, matchIndex: number, generatorType?: string) {
  return produce((state: BracketStore) => {
    const match = state.rounds[index].matchGeneratorData.matches[matchIndex];

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
      case 'competition_team': {
        match.spots.push({
          spotType: 'competition_team',
          seed: 1,
        });
        break;
      }
      case 'team_match_participant': {
        match.spots.push({
          spotType: 'team_match_participant',
          roundPosition: 0,
          matchPosition: 0,
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

export function removePlayerFromMatchAction(index: number, matchIndex: number, spotIndex: number) {
  return produce((state: BracketStore) => {
    const match = state.rounds[index].matchGeneratorData.matches[matchIndex];

    match.spots = match.spots.filter(
      spot => spot !== state.rounds[index].matchGeneratorData.matches[matchIndex].spots[spotIndex],
    );
  });
}

export function updateMatchSpotDetailsAction(
  index: number,
  matchIndex: number,
  spotIndex: number,
  detail: AllParticipant,
) {
  return produce((state: BracketStore) => {
    const match = state.rounds[index].matchGeneratorData.matches[matchIndex];

    match.spots[spotIndex] = detail;
  });
}
