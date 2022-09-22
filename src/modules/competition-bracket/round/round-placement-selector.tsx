import * as React from 'react';
import { spotTypeSelections } from '../builder/bracket-store';

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
      <select
        id="spotType"
        name="spotType"
        onChange={handleChange}
        className="block py-2 pl-3 pr-10 w-full rounded-md text-white text-xs bg-black border-gray-700 hover:bg-gray-900 focus:border-green-500 focus:outline-none focus:ring-green-500"
        defaultValue={defaultValue}
      >
        {spotTypeSelections.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
