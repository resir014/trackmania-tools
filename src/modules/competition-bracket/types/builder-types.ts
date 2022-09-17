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

export interface MatchGeneratorData {
  matches: Array<{ spots: AllParticipant[] }>;
}

export interface BuilderRoundDetail {
  /** Round name. */
  name: string;
  /** Match generator type. (always `'spot_filler'`) */
  matchGeneratorType: 'spot_filler';
  /** Match generator data. */
  matchGeneratorData: MatchGeneratorData;
}

export interface StructureBuilderV1 {
  /** API version. */
  version: 1;
  /** Array of all the rounds in a competition. */
  rounds: BuilderRoundDetail[];
}
