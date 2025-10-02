import clsx from 'clsx';
import * as React from 'react';

interface InputAddonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  block?: boolean;
}

export const InputAddonGroup = React.forwardRef<HTMLDivElement, InputAddonGroupProps>(
  ({ className, children }, ref) => {
    return (
      <div ref={ref} className={clsx('relative rounded-md shadow-sm', className)}>
        {children}
      </div>
    );
  },
);

InputAddonGroup.displayName = 'InputAddonGroup';
