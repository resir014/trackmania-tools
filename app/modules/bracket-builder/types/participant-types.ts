/** Participant from a qualifier. */
export interface QualifierParticipant {
  /** Spot type (always static per participant type) */
  spotType: 'round_challenge_participant';
  /** The zero-indexed value of the previous round position (e.g. 1st round, 2nd round.) */
  roundPosition: number;
  /** Participant qualifier rank. */
  rank: number;
}

/** Participant from a previous round match. */
export interface PreviousRoundParticipant {
  /** Spot type (always static per participant type) */
  spotType: 'match_participant';
  /** The zero-indexed value of the previous round position (e.g. 1st round, 2nd round.) */
  roundPosition: number;
  /** The zero-indexed value of the match number. */
  matchPosition: number;
  /** Participant's finishing position in previous round. */
  rank: number;
}

/**
 * Participant with a manually given seed.
 *
 * Set the seed for each participant from the admin panel after the creation.
 */
export interface SeedParticipant {
  /** Spot type (always static per participant type) */
  spotType: 'competition_participant';
  /** The participant's seed. */
  seed: number;
}

/** Participant is added from X rank in the current competition leaderboard. */
export interface LeaderboardParticipant {
  /** Spot type (always static per participant type) */
  spotType: 'competition_leaderboard';
  /** The participant's current rank. */
  rank: number;
}

/**
 * Team participant with a manually given seed.
 *
 * Set the seed for each participant from the admin panel after the creation.
 */
export interface TeamSeedParticipant {
  /** Spot type (always static per participant type) */
  spotType: 'competition_team';
  /** The participant's seed. */
  seed: number;
}

/** Team participant from a previous round match. */
export interface TeamPreviousRoundParticipant {
  /** Spot type (always static per participant type) */
  spotType: 'team_match_participant';
  /** The zero-indexed value of the previous round position (e.g. 1st round, 2nd round.) */
  roundPosition: number;
  /** The zero-indexed value of the match number. */
  matchPosition: number;
  /** Participant's finishing position in previous round. */
  rank: number;
}
