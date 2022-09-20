import * as React from 'react';

export interface PageHeaderProps {
  pageTitle: string;
  actions?: React.ReactNode;
}

export function PageHeader({ pageTitle, actions }: PageHeaderProps) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-semibold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          {pageTitle}
        </h2>
      </div>
      {actions ? <div className="mt-4 flex md:mt-0 md:ml-4">{actions}</div> : null}
    </div>
  );
}
