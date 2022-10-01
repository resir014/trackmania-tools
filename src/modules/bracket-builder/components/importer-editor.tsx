import * as React from 'react';
import { json } from '@codemirror/lang-json';
import { githubDark } from '@uiw/codemirror-theme-github';
import ReactCodeMirror from '@uiw/react-codemirror';
import { PrimaryButton } from '~/components/ui/button';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { isValidJSON } from '~/utils/is-valid-json';
import { StructureBuilderV1 } from '../types/builder-types';
import { isValidBuilderObject } from '../builder/is-valid-builder-object';

export interface ImporterEditorProps {
  onImport?: (value: StructureBuilderV1) => void;
}

export function ImporterEditor({ onImport }: ImporterEditorProps) {
  const [value, setValue] = React.useState('');

  const handleImport = () => {
    if (isValidJSON(value) && onImport) {
      const parsedValue = JSON.parse(value) as object;

      if (isValidBuilderObject(parsedValue)) {
        onImport(parsedValue);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-left">
        <ReactCodeMirror
          value={value}
          height="200px"
          theme={githubDark}
          extensions={[json()]}
          onChange={toChange => setValue(toChange)}
        />
      </div>
      <PrimaryButton block icon={ArrowUpTrayIcon} onClick={handleImport}>
        Import
      </PrimaryButton>
    </div>
  );
}
