import * as React from 'react';

import clsx from 'clsx';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  block?: boolean;
}

export const InputSelect = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, style, children, block, ...rest }, ref) => (
    <select
      className={clsx(
        block ? 'block' : 'inline-block',
        'w-full pr-10 text-sm shadow-sm rounded-md border-transparent bg-gray-800 focus:ring-green-500 focus:border-green-500',
        className
      )}
      ref={ref}
      style={style}
      {...rest}
    >
      {children}
    </select>
  )
);

InputSelect.displayName = 'InputSelect';
