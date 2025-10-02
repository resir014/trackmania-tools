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
    <div className="relative flex flex-1 flex-col">
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
        className="h-full min-h-[64px] flex-1 overflow-auto rounded-lg bg-gray-800 p-4 text-left font-mono text-sm"
        value={builderText}
      />
    </div>
  );
}
