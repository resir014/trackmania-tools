import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { fromElement } from 'copee';
import * as React from 'react';
import { GhostedButton } from '~/components/ui/button';

export interface GeneratedTextProps {
  builderText: string;
}

export function GeneratedText({ builderText }: GeneratedTextProps) {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const [copyComplete, setCopyComplete] = React.useState(false);

  const handleCopyText = () => {
    if (textAreaRef.current) {
      const success = fromElement(textAreaRef.current);

      if (success) {
        setCopyComplete(true);

        setTimeout(() => {
          setCopyComplete(false);
        }, 2500);
      }
    }
  };

  return (
    <div className="relative flex flex-col flex-1">
      <GhostedButton
        type="button"
        className="absolute top-2 right-6"
        color="blue"
        icon={copyComplete ? CheckIcon : ClipboardIcon}
        iconOnly
        onClick={handleCopyText}
      >
        {copyComplete ? 'Copied!' : 'Copy to clipboard'}
      </GhostedButton>
      <textarea
        ref={textAreaRef}
        className="flex-1 p-4 bg-gray-800 rounded-tl-lg rounded-br-lg text-sm text-left h-full min-h-[64px] font-mono overflow-auto"
        value={builderText}
      />
    </div>
  );
}
