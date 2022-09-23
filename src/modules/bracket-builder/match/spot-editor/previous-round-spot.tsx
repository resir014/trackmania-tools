import * as React from 'react';
import { InputAddonGroup } from '~/components/ui/forms/input-addon-group';
import { InputAddonText } from '~/components/ui/forms/input-addon-text';
import { InputText } from '~/components/ui/forms/input-text';
import { useSignal } from '~/utils/signals';
import { PreviousRoundParticipant } from '../../types/participant-types';

export interface PreviousRoundSpotProps {
  spot: PreviousRoundParticipant;
  onChange?: (spot: PreviousRoundParticipant) => void;
}

export function PreviousRoundSpot({ spot, onChange }: PreviousRoundSpotProps) {
  const rankState = useSignal(spot);
  const roundPosInputState = useSignal(spot.roundPosition.toString());
  const matchPosInputState = useSignal(spot.matchPosition.toString());
  const rankInputState = useSignal(spot.rank.toString());

  const handleRoundPosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    roundPosInputState.value = e.target.value;
    const posAsNumber = parseInt(roundPosInputState.value, 10);

    // Check if input value is valid number before updating state
    if (onChange && isFinite(posAsNumber)) {
      rankState.value = { ...rankState.value, roundPosition: posAsNumber };
      onChange(rankState.value);
    }
  };

  const handleMatchPosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    matchPosInputState.value = e.target.value;
    const posAsNumber = parseInt(matchPosInputState.value, 10);

    // Check if input value is valid number before updating state
    if (onChange && isFinite(posAsNumber)) {
      rankState.value = { ...rankState.value, matchPosition: posAsNumber };
      onChange(rankState.value);
    }
  };

  const handleRankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    rankInputState.value = e.target.value;
    const rankAsNumber = parseInt(rankInputState.value, 10);

    // Check if input value is valid number before updating state
    if (onChange && isFinite(rankAsNumber)) {
      rankState.value = { ...rankState.value, rank: rankAsNumber };
      onChange(rankState.value);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div>
        <label htmlFor="roundPosition" className="sr-only">
          Round position
        </label>
        <InputAddonGroup>
          <InputAddonText>R</InputAddonText>
          <InputText
            type="text"
            inputMode="numeric"
            name="rank"
            id="rank"
            autoComplete="off"
            className="pl-7"
            value={roundPosInputState.value}
            onChange={handleRoundPosChange}
          />
        </InputAddonGroup>
      </div>
      <div>
        <label htmlFor="roundPosition" className="sr-only">
          Match position
        </label>
        <InputAddonGroup>
          <InputAddonText>M</InputAddonText>
          <InputText
            type="text"
            inputMode="numeric"
            name="rank"
            id="rank"
            autoComplete="off"
            className="pl-7"
            value={matchPosInputState.value}
            onChange={handleMatchPosChange}
          />
        </InputAddonGroup>
      </div>
      <div>
        <label htmlFor="rank" className="sr-only">
          Rank
        </label>
        <InputAddonGroup>
          <InputAddonText>#</InputAddonText>
          <InputText
            type="text"
            inputMode="numeric"
            name="rank"
            id="rank"
            autoComplete="off"
            className="pl-7"
            value={rankInputState.value}
            onChange={handleRankChange}
          />
        </InputAddonGroup>
      </div>
    </div>
  );
}
