import * as React from 'react';

export function DefaultLayout({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
