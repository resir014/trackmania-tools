import clsx from 'clsx';
import * as React from 'react';

type InputTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InputTextarea = React.forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  ({ className, rows = 4, ...rest }, ref) => {
    return (
      <textarea
        className={clsx(
          'hover:bg-opacity-50 rounded-md border-transparent bg-gray-800 shadow-sm hover:bg-gray-900 focus:border-green-500 focus:ring-green-500',
          className,
        )}
        ref={ref}
        rows={rows}
        {...rest}
      />
    );
  },
);

InputTextarea.displayName = 'InputTextarea';
