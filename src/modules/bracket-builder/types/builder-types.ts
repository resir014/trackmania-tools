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