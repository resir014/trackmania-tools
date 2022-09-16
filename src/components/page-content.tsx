import clsx from 'clsx';
import * as React from 'react';

export interface PageContentProps extends React.PropsWithChildren<{}> {
  className?: string;
}

export function PageContent({ className, children }: PageContentProps) {
  return <div className={clsx('flex flex-col flex-1 px-6 py-6', className)}>{children}</div>;
}
