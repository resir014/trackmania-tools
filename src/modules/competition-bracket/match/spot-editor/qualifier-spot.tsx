import { useSignal } from '@preact/signals-react';
import * as React from 'react';
import { InputAddonGroup } from '~/components/ui/forms/input-addon-group';
import { InputAddonText } from '~/components/ui/forms/input-addon-text';
import { InputText } from '~/components/ui/forms/input-text';
import { QualifierParticipant } from '../../types/participant-types';

export interface QualifierSpotProps {
  spot: QualifierParticipant;
  onChange?: (spot: QualifierParticipant) => void;
}

export function QualifierSpot({ spot, onChange }: QualifierSpotProps) {
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
            value={formState.value}
          />
        </InputAddonGroup>
      </div>
    </div>
  );
}
