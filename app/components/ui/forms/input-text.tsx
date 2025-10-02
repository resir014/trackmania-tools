import clsx from 'clsx';
import * as React from 'react';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isGroupItem?: boolean;
}

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, type = 'text', isGroupItem, ...rest }, ref) => {
    return (
      <input
        className={clsx(
          isGroupItem ? 'first:rounded-l-md last:rounded-r-md' : 'rounded-md shadow-sm',
          'block w-full border-transparent bg-gray-800 text-sm focus:border-green-500 focus:ring-green-500',
          className,
        )}
        ref={ref}
        type={type}
        {...rest}
      />
    );
  },
);

InputText.displayName = 'InputText';
