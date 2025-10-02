import * as React from 'react';
import { spotTypeSelections } from '../builder/bracket-store';
import { InputSelect } from '~/components/ui/forms/input-select';

export interface RoundPlacementSelectorProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function RoundPlacementSelector({ defaultValue, onChange }: RoundPlacementSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      <label htmlFor="spotType" className="sr-only">
        Placement
      </label>
      <InputSelect id="spotType" name="spotType" onChange={handleChange} defaultValue={defaultValue}>
        {spotTypeSelections.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </InputSelect>
    </div>
  );
}
