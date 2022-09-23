import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { toClipboard } from 'copee';
import * as React from 'react';
import { GhostedButton } from '~/components/ui/button';
import { useSignal } from '~/utils/signals';

export interface GeneratedTextProps {
  builderText: string;
}

export function GeneratedText({ builderText }: GeneratedTextProps) {
  const copyCompleteState = useSignal(false);

  const handleCopyText = () => {
    const success = toClipboard(builderText);

    if (success) {
      copyCompleteState.value = true;
      setTimeout(() => {
        copyCompleteState.value = false;
      }, 2500);
    }
  };

  return (
    <div className="relative">
      <GhostedButton
        type="button"
        className="absolute top-2 right-4"
        color="blue"
        icon={copyCompleteState.value ? CheckIcon : ClipboardIcon}
        iconOnly
        onClick={handleCopyText}
      >
        {copyCompleteState.value ? 'Copied!' : 'Copy to clipboard'}
      </GhostedButton>
      <pre className="p-4 bg-gray-800 rounded-tl-lg rounded-br-lg text-sm text-left h-full max-h-[240px] overflow-hidden select-none pointer-events-none">
        {builderText}
      </pre>
    </div>
  );
}
