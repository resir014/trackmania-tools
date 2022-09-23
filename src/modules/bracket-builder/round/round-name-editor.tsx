import { CheckIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import clsx from 'clsx';
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
            'w-full pl-2 pr-14 py-1 border border-transparent rounded-tl-md rounded-br-md text-lg font-semibold',
            isEditing ? 'bg-gray-800 bg-opacity-50' : 'bg-transparent',
            'hover:bg-gray-800 hover:bg-opacity-50 focus:bg-gray-800 focus:bg-opacity-50',
            'focus:border-green-500 focus:outline-none focus:ring-green-500'
          )}
          onChange={handleChange}
          value={inputState}
        />
        {isEditing ? (
          <div className="absolute right-0 top-0 h-full pr-1 flex items-center">
            <GhostedButton type="submit" color="green" size="xs" icon={CheckIcon} iconOnly>
              Save
            </GhostedButton>
          </div>
        ) : null}
      </div>
    </form>
  );
}
