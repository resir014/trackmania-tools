import { useSignal } from '@preact/signals-react';
import * as React from 'react';
import { InputAddonGroup } from '~/components/ui/forms/input-addon-group';
import { InputAddonText } from '~/components/ui/forms/input-addon-text';
import { InputSelect } from '~/components/ui/forms/input-select';
import { InputText } from '~/components/ui/forms/input-text';
import { PreviousRoundParticipant } from '../../types/participant-types';

export interface PreviousRoundSpotProps {
  spot: PreviousRoundParticipant;
  onChange?: (spot: PreviousRoundParticipant) => void;
}

export function PreviousRoundSpot({ spot, onChange }: PreviousRoundSpotProps) {
  const rankState = useSignal(spot);
  const formState = useSignal('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    formState.value = e.target.value;
    const rankAsNumber = parseInt(formState.value, 10);

    // Check if input value is valid number before updating rank state
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
        <InputSelect>
          <option>Round 1</option>
          <option>Round 2</option>
          <option>Round 3</option>
        </InputSelect>
      </div>
      <div>
        <label htmlFor="roundPosition" className="sr-only">
          Match position
        </label>
        <InputSelect>
          <option value="0">Match #1</option>
          <option value="1">Match #2</option>
          <option value="2">Match #3</option>
          <option value="3">Match #4</option>
        </InputSelect>
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
            onChange={handleChange}
          />
        </InputAddonGroup>
      </div>
    </div>
  );
}
