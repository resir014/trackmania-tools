import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { toClipboard } from 'copee';
import * as React from 'react';
import { GhostedButton } from '~/components/ui/button';

export interface GeneratedTextProps {
  builderText: string;
}

export function GeneratedText({ builderText }: GeneratedTextProps) {
  const [copyComplete, setCopyComplete] = React.useState(false);

  console.log(builderText);

  const handleCopyText = () => {
    const success = toClipboard(builderText);
    console.log(success);

    if (success) {
      setCopyComplete(true);

      setTimeout(() => {
        setCopyComplete(false);
      }, 2500);
    }
  };

  return (
    <div className="relative flex flex-col flex-1">
      <GhostedButton
        type="button"
        className="absolute top-2 right-4"
        color="blue"
        icon={copyComplete ? CheckIcon : ClipboardIcon}
        iconOnly
        onClick={handleCopyText}
      >
        {copyComplete ? 'Copied!' : 'Copy to clipboard'}
      </GhostedButton>
      <pre className="flex-1 p-4 bg-gray-800 rounded-tl-lg rounded-br-lg text-sm text-left h-full min-h-[64px] overflow-hidden select-none pointer-events-none">
        {builderText}
      </pre>
    </div>
  );
}
