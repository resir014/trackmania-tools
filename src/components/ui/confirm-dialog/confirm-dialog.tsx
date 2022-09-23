import { useSignal } from '@preact/signals-react';
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
export function ConfirmDialogProvider({ children }: React.PropsWithChildren<{}>) {
  const dialogOpenState = useSignal(false);
  const dialogOptionsState = useSignal<ConfirmDialogOptions | undefined>(undefined);

  const openDialog = (options: ConfirmDialogOptions) => {
    dialogOptionsState.value = options;
    dialogOpenState.value = true;
  };

  const resetDialog = () => {
    dialogOpenState.value = false;
    setTimeout(() => {
      dialogOptionsState.value = undefined;
    }, 300);
  };

  const handleCancel = () => {
    resetDialog();
    dialogOptionsState.value?.actionCallback(false);
  };

  const handleConfirm = () => {
    resetDialog();
    dialogOptionsState.value?.actionCallback(true);
  };

  return (
    <ConfirmDialogContext.Provider value={{ openDialog }}>
      <ConfirmDialogPrompt
        isOpen={dialogOpenState.value}
        title={dialogOptionsState.value?.title ?? ''}
        description={dialogOptionsState.value?.message ?? ''}
        confirmText={dialogOptionsState.value?.confirmText}
        cancelText={dialogOptionsState.value?.cancelText}
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
