import {
  LeaderboardParticipant,
  PreviousRoundParticipant,
  QualifierParticipant,
  SeedParticipant,
} from './participant-types';

export type AllParticipant =
  | QualifierParticipant
  | PreviousRoundParticipant
  | SeedParticipant
  | LeaderboardParticipant;

export type AllSpotTypes = AllParticipant['spotType'];

export interface MatchSettingsData {
  spots: AllParticipant[];
  settings?: Array<Record<string, unknown>>;
}

export interface MatchGeneratorData {
  matches: MatchSettingsData[];
}

export interface BuilderRoundDetail {
  /** Round name. */
  name: string;
  /** Match generator type. (always `'spot_filler'`) */
  matchGeneratorType: 'spot_filler';
  /** Match generator data. */
  matchGeneratorData: MatchGeneratorData;
  /** Not actually from the API. Defines the default participant type. */
  defaultSpotType?: AllParticipant['spotType'];
}

export interface StructureBuilderV1 {
  /** API version. */
  version: 1;
  /** Array of all the rounds in a competition. */
  rounds: BuilderRoundDetail[];
}

export interface BracketStore {
  rounds: BuilderRoundDetail[];
  importBracketData?: (structure: StructureBuilderV1) => void;
  addNewRound: (spotType: AllSpotTypes) => void;
  removeRound: (index: number) => void;
  clearAllRounds: () => void;
  changeRoundName: (index: number, name: string) => void;
  clearMatchesInRound: (index: number) => void;
  addMatchToRound: (index: number) => void;
  removeMatchFromRound: (index: number, matchIndex: number) => void;
  addPlayerToMatch: (index: number, matchIndex: number, generatorType?: string) => void;
  removePlayerFromMatch: (index: number, matchIndex: number, spotIndex: number) => void;
  updateMatchSpotDetails: (
    index: number,
    matchIndex: number,
    spotIndex: number,
    detail: AllParticipant
  ) => void;
}
