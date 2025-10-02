import clsx from 'clsx';
import * as React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  block?: boolean;
}

export const InputSelect = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, style, children, block, ...rest }, ref) => (
    <select
      className={clsx(
        block ? 'block' : 'inline-block',
        'w-full rounded-md border-transparent bg-gray-800 pr-10 text-sm shadow-sm focus:border-green-500 focus:ring-green-500',
        className,
      )}
      ref={ref}
      style={style}
      {...rest}
    >
      {children}
    </select>
  ),
);

InputSelect.displayName = 'InputSelect';
