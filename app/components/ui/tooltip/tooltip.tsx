import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import type { ReactNode } from 'react';

interface TooltipProps
  extends Pick<TooltipPrimitive.TooltipProps, 'open' | 'defaultOpen' | 'onOpenChange' | 'delayDuration'>,
    Pick<TooltipPrimitive.TooltipTriggerProps, 'children'>,
    Omit<TooltipPrimitive.TooltipContentProps, 'content'> {
  content: ReactNode;
}

export const TooltipProvider = TooltipPrimitive.Provider;

export function Tooltip({
  content,
  children,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration = 500,
  side = 'top',
  align = 'center',
  sideOffset = 4,
  className,
  ...rest
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          sideOffset={sideOffset}
          className={clsx('z-50 max-w-sm rounded-md border border-white bg-white p-1 text-sm text-black', className)}
          {...rest}
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-white" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
