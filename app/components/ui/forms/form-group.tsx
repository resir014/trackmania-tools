import clsx from 'clsx';
import * as React from 'react';

type FormLabelProps = React.HTMLAttributes<HTMLDivElement>;

export const FormGroup = React.forwardRef<HTMLDivElement, FormLabelProps>(({ className, children }, ref) => {
  return (
    <div className={clsx('flex rounded-md shadow-sm', className)} ref={ref}>
      {children}
    </div>
  );
});

FormGroup.displayName = 'FormGroup';
