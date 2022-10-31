import * as React from 'react';
import { GlobalHeader } from './global-header';

export interface PageProps extends React.PropsWithChildren {
  subBrand?: string;
}

export function Page({ subBrand, children }: PageProps) {
  return (
    <div className="flex flex-col flex-1">
      <GlobalHeader subBrand={subBrand} />
      {children}
    </div>
  );
}
