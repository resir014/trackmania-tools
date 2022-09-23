import clsx from 'clsx';
import * as React from 'react';

export type InputAddonTextProps = React.HTMLAttributes<HTMLDivElement>;

export const InputAddonText = React.forwardRef<HTMLDivElement, InputAddonTextProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
          className
        )}
      >
        <span className="text-gray-500 sm:text-sm">{children}</span>
      </div>
    );
  }
);

InputAddonText.displayName = 'InputAddonText';
