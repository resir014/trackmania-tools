import clsx from 'clsx';
import * as React from 'react';

type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, style, children, htmlFor, ...rest }, ref) => (
    <label className={clsx('block text-sm font-medium text-gray-300', className)} htmlFor={htmlFor} ref={ref} {...rest}>
      {children}
    </label>
  ),
);

FormLabel.displayName = 'FormLabel';
