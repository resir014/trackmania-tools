import { PlusIcon } from '@heroicons/react/24/outline';
import * as React from 'react';

export function AddNewRoundButton() {
  return (
    <button
      type="button"
      className="group flex flex-col items-center justify-center w-full py-6 lg:py-12 text-sm rounded-md border-2 border-dashed border-gray-600 hover:border-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ring-offset-gray-900"
    >
      <PlusIcon className="w-6 h-6 lg:w-12 lg:h-12 text-gray-600" aria-hidden />
      <span className="mt-2 block text-sm font-medium text-white">Add new round</span>
    </button>
  );
}
