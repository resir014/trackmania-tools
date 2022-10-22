import * as React from 'react';
import { Panel } from '~/components/ui/panel';
import { StructureBuilderV1 } from '../types/builder-types';
import { GeneratedText } from './generated-copier';

export interface ExporterDrawerProps {
  isOpen?: boolean;
  generatedJSON: StructureBuilderV1;
  onClose?: () => void;
}

export function ExporterDrawer({ isOpen, generatedJSON, onClose }: ExporterDrawerProps) {
  const handleCloseDrawer = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Panel
      isOpen={isOpen}
      title="Export structure file"
      description="Copy it to your clipboard and paste it into the Competition Tool."
      onClose={handleCloseDrawer}
    >
      <GeneratedText builderText={`${JSON.stringify(generatedJSON, null, 2)}`} />
    </Panel>
  );
}
