import * as React from 'react';

export interface PageHeaderProps {
  pageTitle: string;
  tooltip?: React.ReactNode;
  actions?: React.ReactNode;
}

export function PageHeader({ pageTitle, actions, tooltip }: PageHeaderProps) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="md:flex md:items-center min-w-0 flex-1">
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
            {pageTitle}
          </h2>
        </div>
        {tooltip ? <div className="mt-4 flex md:mt-0 md:ml-4">{tooltip}</div> : null}
      </div>
      {actions ? <div className="mt-4 flex md:mt-0 md:ml-4">{actions}</div> : null}
    </div>
  );
}
