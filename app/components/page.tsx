import * as React from 'react';
import { GlobalHeader } from './global-header';

export interface PageProps extends React.PropsWithChildren {
  subBrand?: string;
}

export function Page({ subBrand, children }: PageProps) {
  return (
    <div className="flex flex-1 flex-col">
      <GlobalHeader subBrand={subBrand} />
      {children}
    </div>
  );
}
