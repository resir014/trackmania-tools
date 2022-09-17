import * as React from 'react';
import {
  GhostedButton,
  OutlineButton,
  PrimaryButton,
  SecondaryButton,
} from '~/components/ui/button';

export interface PageHeaderProps {
  pageTitle: string;
}

export function PageHeader({ pageTitle }: PageHeaderProps) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          {pageTitle}
        </h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4 space-x-4">
        <GhostedButton>h winke</GhostedButton>
        <OutlineButton>h winke</OutlineButton>
        <SecondaryButton>h winke</SecondaryButton>
        <PrimaryButton>h winke</PrimaryButton>
      </div>
    </div>
  );
}
