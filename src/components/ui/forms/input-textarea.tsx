import * as React from 'react';

import clsx from 'clsx';

type InputTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InputTextarea = React.forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  ({ className, rows = 4, ...rest }, ref) => {
    return (
      <textarea
        className={clsx(
          'shadow-sm rounded-md bg-black border-gray-700 hover:bg-gray-900 hover:bg-opacity-50 focus:ring-green-500 focus:border-green-500',
          className
        )}
        ref={ref}
        rows={rows}
        {...rest}
      />
    );
  }
);

InputTextarea.displayName = 'InputTextarea';
