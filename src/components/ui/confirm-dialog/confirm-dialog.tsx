import * as React from 'react';
import ConfirmDialogPrompt from './confirm-dialog-prompt';

interface ConfirmDialogOptions {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  actionCallback: (data: boolean | PromiseLike<boolean>) => void;
}

type ConfirmOptions = Omit<ConfirmDialogOptions, 'actionCallback'>;

type OpenDialogCallback = (options: ConfirmDialogOptions) => void;

interface ConfirmDialogContextObject {
  openDialog: OpenDialogCallback;
}

export const ConfirmDialogContext = React.createContext<ConfirmDialogContextObject>(
  {} as ConfirmDialogContextObject
);

/**
 * React context provider for `ConfirmDialog` state.
 *
 * **Important:** Wrap your app inside this provider before using `useConfirmDialog()`.
 */
export function ConfirmDialogProvider({ children }: React.PropsWithChildren) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [dialogOptions, setDialogOptions] = React.useState<ConfirmDialogOptions | undefined>(
    undefined
  );

  const openDialog = (options: ConfirmDialogOptions) => {
    setDialogOptions(options);
    setIsDialogOpen(true);
  };

  const resetDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => {
      setDialogOptions(undefined);
    }, 300);
  };

  const handleCancel = () => {
    resetDialog();
    dialogOptions?.actionCallback(false);
  };

  const handleConfirm = () => {
    resetDialog();
    dialogOptions?.actionCallback(true);
  };

  return (
    <ConfirmDialogContext.Provider value={{ openDialog }}>
      <ConfirmDialogPrompt
        isOpen={isDialogOpen}
        title={dialogOptions?.title ?? ''}
        description={dialogOptions?.message ?? ''}
        confirmText={dialogOptions?.confirmText}
        cancelText={dialogOptions?.cancelText}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      {children}
    </ConfirmDialogContext.Provider>
  );
}

/**
 * Provides a hooks-friendly approach to rendering confirmation dialogs.
 *
 * **Important:** You must wrap your app with `<ConfirmDialogProvider>` for this to work!
 *
 * @example
 * const { confirm } = useConfirmDialog();
 *
 * // ...
 *
 * const confirmed = await getConfirmation({
 *   title: 'Delete item?',
 *   message: 'Are you sure you want to delete this item?',
 *   confirmText: 'Yes',
 *   cancelText: 'no'
 * });
 *
 * if (confirmed) {
 *   // perform operation
 * }
 */
export function useConfirmDialog() {
  const { openDialog } = React.useContext(ConfirmDialogContext);

  const confirm = ({ ...options }: ConfirmOptions) => {
    return new Promise<boolean>(res => {
      openDialog({ actionCallback: res, ...options });
    });
  };

  return { confirm };
}
