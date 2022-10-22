import { json } from '@codemirror/lang-json';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { githubDark } from '@uiw/codemirror-theme-github';
import ReactCodeMirror from '@uiw/react-codemirror';
import * as React from 'react';
import { OutlineButton, PrimaryButton } from '~/components/ui/button';
import { Panel } from '~/components/ui/panel';
import { isValidJSON } from '~/utils/is-valid-json';
import { isValidBuilderObject } from '../builder/is-valid-builder-object';
import { StructureBuilderV1 } from '../types/builder-types';

export interface ImporterDrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
  onImport?: (value: StructureBuilderV1) => void;
}

export function ImporterDrawer({ isOpen, onClose, onImport }: ImporterDrawerProps) {
  const [value, setValue] = React.useState('');

  const handleCloseDrawer = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleImport = () => {
    if (isValidJSON(value) && onImport) {
      const parsedValue = JSON.parse(value) as object;

      if (isValidBuilderObject(parsedValue)) {
        onImport(parsedValue);
        handleCloseDrawer();
      }
    }
  };

  return (
    <Panel
      isOpen={isOpen}
      title="Import structure file"
      description="Copy and paste your existing structure file here."
      isBorderless
      size="lg"
      onClose={handleCloseDrawer}
      actions={
        <>
          <OutlineButton type="button" color="gray" onClick={handleCloseDrawer}>
            Cancel
          </OutlineButton>
          <PrimaryButton className="ml-4" icon={ArrowUpTrayIcon} onClick={handleImport}>
            Import
          </PrimaryButton>
        </>
      }
    >
      <ReactCodeMirror
        className="flex-1 helper-cm-fullheight"
        value={value}
        theme={githubDark}
        height="100%"
        extensions={[json()]}
        onChange={toChange => setValue(toChange)}
      />
    </Panel>
  );
}
