import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Outlet } from 'react-router';
import { DefaultLayout } from './components/default-layout';
import { ConfirmDialogProvider } from './components/ui/confirm-dialog';

export default function RootLayout() {
  return (
    <ConfirmDialogProvider>
      <TooltipProvider>
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      </TooltipProvider>
    </ConfirmDialogProvider>
  );
}
