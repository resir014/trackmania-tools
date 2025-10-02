import { CheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import * as React from 'react';
import { GhostedButton } from '~/components/ui/button';

export interface RoundNameEditorProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

export function RoundNameEditor({ initialValue, onChange }: RoundNameEditorProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputState, setInputState] = React.useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  const handleEditName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsEditing(false);
    if (onChange && inputState) {
      onChange(inputState);
    }
  };

  return (
    <form onSubmit={handleEditName} className="flex-1">
      <label htmlFor="roundName" className="sr-only">
        Round name
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          id="roundName"
          name="roundName"
          autoComplete="off"
          onFocus={() => setIsEditing(true)}
          className={clsx(
            'w-full rounded-md border border-transparent py-1 pr-14 pl-2 text-lg font-semibold',
            isEditing ? 'bg-opacity-50 bg-gray-800' : 'bg-transparent',
            'hover:bg-opacity-50 focus:bg-opacity-50 hover:bg-gray-800 focus:bg-gray-800',
            'focus:border-green-500 focus:ring-green-500 focus:outline-none',
          )}
          onChange={handleChange}
          value={inputState}
        />
        {isEditing ? (
          <div className="absolute top-0 right-0 flex h-full items-center pr-1">
            <GhostedButton type="submit" color="green" size="xs" icon={CheckIcon} iconOnly>
              Save
            </GhostedButton>
          </div>
        ) : null}
      </div>
    </form>
  );
}
