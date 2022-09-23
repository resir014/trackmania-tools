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
  const [updateSpot, setUpdateSpot] = React.useState(spot);
  const [formState, setFormState] = React.useState(spot.rank.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormState(e.target.value);
    const rankAsNumber = parseInt(formState, 10);

    // Check if input value is valid number before updating rank state
    if (onChange && isFinite(rankAsNumber)) {
      setUpdateSpot(prevState => ({ ...prevState, rank: rankAsNumber }));
      onChange(updateSpot);
    }
  };

  return (
    <div className="flex items-center space-x-2 flex-1">
      <div className="flex-1">
        <label htmlFor="rank" className="sr-only">
          Rank
        </label>
        <InputAddonGroup className="w-full">
          <InputAddonText>#</InputAddonText>
          <InputText
            type="text"
            inputMode="numeric"
            name="rank"
            id="rank"
            autoComplete="off"
            className="pl-7"
            onChange={handleChange}
            value={formState}
          />
        </InputAddonGroup>
      </div>
    </div>
  );
}
