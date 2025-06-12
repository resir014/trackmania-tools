import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface TooltipProps
  extends Pick<
      TooltipPrimitive.TooltipProps,
      'open' | 'defaultOpen' | 'onOpenChange' | 'delayDuration'
    >,
    Pick<TooltipPrimitive.TooltipTriggerProps, 'children'>,
    TooltipPrimitive.TooltipContentProps {
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
          className={clsx(
            'bg-white text-black text-sm p-1 rounded-md border border-white z-50 max-w-sm',
            className
          )}
          {...rest}
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-white" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
