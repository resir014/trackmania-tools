import clsx from 'clsx';
import * as React from 'react';

type InputCheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputCheckbox = React.forwardRef<HTMLInputElement, InputCheckboxProps>(({ className, ...rest }, ref) => {
  return (
    <input
      className={clsx('h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-green-500', className)}
      ref={ref}
      type="checkbox"
      {...rest}
    />
  );
});

InputCheckbox.displayName = 'InputCheckbox';
