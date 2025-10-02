import * as React from 'react';

export function DefaultLayout({ children }: React.PropsWithChildren) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}
