import * as React from 'react';
import { InputAddonGroup } from '~/components/ui/forms/input-addon-group';
import { InputAddonText } from '~/components/ui/forms/input-addon-text';
import { InputText } from '~/components/ui/forms/input-text';
import { SeedParticipant } from '../../types/participant-types';

export interface ManualSeedSpotProps {
  spot: SeedParticipant;
  onChange?: (spot: SeedParticipant) => void;
}

export function ManualSeedSpot({ spot, onChange }: ManualSeedSpotProps) {
  const [updateSpot, setUpdateSpot] = React.useState(spot);
  const [formState, setFormState] = React.useState(spot.seed.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormState(e.target.value);
    const seedAsNumber = parseInt(formState, 10);

    // Check if input value is valid number before updating rank state
    if (onChange && isFinite(seedAsNumber)) {
      setUpdateSpot(prevState => ({ ...prevState, seed: seedAsNumber }));
      onChange(updateSpot);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div>
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
    </div>
  );
}
