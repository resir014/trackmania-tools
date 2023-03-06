import * as React from 'react';
import { InputAddonGroup } from '~/components/ui/forms/input-addon-group';
import { InputAddonText } from '~/components/ui/forms/input-addon-text';
import { InputText } from '~/components/ui/forms/input-text';
import { TeamSeedParticipant } from '../../types/participant-types';

export interface TeamSeedSpotProps {
  spot: TeamSeedParticipant;
  onChange?: (spot: TeamSeedParticipant) => void;
}

export function TeamSeedSpot({ spot, onChange }: TeamSeedSpotProps) {
  const [updateSpot, setUpdateSpot] = React.useState(spot);
  const [formState, setFormState] = React.useState(spot.seed.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormState(e.target.value);
    const seedAsNumber = parseInt(e.target.value, 10);

    // Check if input value is valid number before updating rank state
    if (onChange && isFinite(seedAsNumber)) {
      const nextState = { ...updateSpot, seed: seedAsNumber };
      setUpdateSpot(nextState);
      onChange(nextState);
    }
  };

  return (
    <div className="flex-1">
      <label htmlFor="seed" className="sr-only">
        Seed
      </label>
      <InputAddonGroup>
        <InputAddonText>#</InputAddonText>
        <InputText
          type="text"
          inputMode="numeric"
          name="seed"
          id="seed"
          autoComplete="off"
          className="pl-7"
          onChange={handleChange}
          value={formState}
        />
      </InputAddonGroup>
    </div>
  );
}
