import * as React from 'react';
import { InputAddonGroup } from '~/components/ui/forms/input-addon-group';
import { InputAddonText } from '~/components/ui/forms/input-addon-text';
import { InputSelect } from '~/components/ui/forms/input-select';
import { InputText } from '~/components/ui/forms/input-text';
import { useBracketStore } from '../../builder/bracket-store';
import { PreviousRoundParticipant } from '../../types/participant-types';

export interface PreviousRoundSpotProps {
  spot: PreviousRoundParticipant;
  onChange?: (spot: PreviousRoundParticipant) => void;
}

export function PreviousRoundSpot({ spot, onChange }: PreviousRoundSpotProps) {
  const [updateSpot, setUpdateSpot] = React.useState(spot);
  const [roundPosInputState, setRoundPosInputState] = React.useState(spot.roundPosition.toString());
  const [matchPosInputState, setMatchPosInputState] = React.useState(spot.matchPosition.toString());
  const [rankInputState, setRankInputState] = React.useState(spot.rank.toString());

  const roundOptions = useBracketStore(state =>
    state.rounds.map((round, index) => ({
      label: round.name,
      value: index,
    }))
  );

  const handleRoundPosChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setRoundPosInputState(e.target.value);
    const posAsNumber = parseInt(roundPosInputState, 10);

    // Check if input value is valid number before updating state
    if (onChange && isFinite(posAsNumber)) {
      setUpdateSpot(prevState => ({ ...prevState, roundPosition: posAsNumber }));
      onChange(updateSpot);
    }
  };

  const handleMatchPosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMatchPosInputState(e.target.value);
    const posAsNumber = parseInt(matchPosInputState, 10);

    // Check if input value is valid number before updating state
    if (onChange && isFinite(posAsNumber)) {
      setUpdateSpot(prevState => ({ ...prevState, matchPosition: posAsNumber }));
      onChange(updateSpot);
    }
  };

  const handleRankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRankInputState(e.target.value);
    const rankAsNumber = parseInt(rankInputState, 10);

    // Check if input value is valid number before updating state
    if (onChange && isFinite(rankAsNumber)) {
      setUpdateSpot(prevState => ({ ...prevState, rank: rankAsNumber }));
      onChange(updateSpot);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex-1">
        <label htmlFor="roundPosition" className="sr-only">
          Round position
        </label>
        <InputSelect
          name="roundPosition"
          id="roundPosition"
          className="w-full"
          value={roundPosInputState}
          onChange={handleRoundPosChange}
        >
          {roundOptions.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </InputSelect>
      </div>
      <div className="flex-1">
        <label htmlFor="matchPosition" className="sr-only">
          Match position
        </label>
        <InputAddonGroup>
          <InputAddonText>M</InputAddonText>
          <InputText
            type="text"
            inputMode="numeric"
            name="matchPosition"
            id="matchPosition"
            autoComplete="off"
            className="pl-7"
            value={matchPosInputState}
            onChange={handleMatchPosChange}
          />
        </InputAddonGroup>
      </div>
      <div className="flex-1">
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
            value={rankInputState}
            onChange={handleRankChange}
          />
        </InputAddonGroup>
      </div>
    </div>
  );
}
