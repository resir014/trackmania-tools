import * as Tooltip from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';

interface TooltipWrapperProps {
  content: ReactNode;
  children: ReactNode;
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({ content, children }) => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="top"
          align="center"
          className="bg-white text-black text-sm p-1 rounded-md shadow-md border border-gray-300 z-50 max-w-sm"
        >
          {content}
          <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);

export default TooltipWrapper;
