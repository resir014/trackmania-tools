import * as React from 'react';
import { useSignal } from '@preact/signals-react';
import { GhostedButton } from '~/components/ui/button';
import { CheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export interface RoundNameEditorProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

export function RoundNameEditor({ initialValue, onChange }: RoundNameEditorProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = React.useState(false);
  const inputState = useSignal(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputState.value = e.target.value;
  };

  const handleEditName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsEditing(false);
    if (onChange && inputState.value) {
      onChange(inputState.value);
    }
  };

  return (
    <form onSubmit={handleEditName} className="flex items-center space-x-2">
      <label htmlFor="roundName" className="sr-only">
        Round name
      </label>
      <input
        ref={inputRef}
        type="text"
        id="roundName"
        name="roundName"
        autoComplete="off"
        onFocus={() => setIsEditing(true)}
        className={clsx(
          'px-2 py-1 border border-transparent rounded-md text-lg font-semibold',
          isEditing ? 'bg-gray-800 bg-opacity-50' : 'bg-transparent',
          'hover:bg-gray-800 hover:bg-opacity-50 focus:bg-gray-800 focus:bg-opacity-50',
          'focus:border-green-500 focus:outline-none focus:ring-green-500'
        )}
        onChange={handleChange}
        value={inputState.value}
      />
      {isEditing ? (
        <GhostedButton type="submit" color="green" rounded icon={CheckIcon} iconOnly>
          Save
        </GhostedButton>
      ) : null}
    </form>
  );
}
