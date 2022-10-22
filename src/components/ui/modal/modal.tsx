import clsx from 'clsx';
import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { OutlineButton } from '../button';
import { ModalState, modalStates } from './modal-icons';

export interface ModalProps {
  isOpen?: boolean;
  title: string;
  message?: string;
  state?: ModalState;
  content?: React.ReactNode;
  closeButtonText?: string;
  onClose?: () => void;
  actions?: React.ReactNode;
}

export function Modal({
  isOpen,
  title,
  message,
  state = 'info',
  content,
  closeButtonText,
  onClose,
  actions,
}: ModalProps) {
  const closeButtonRef = React.useRef(null);

  const modalState = modalStates(state);

  const handleCloseDialog = () => {
    if (onClose) {
      onClose();
    }
  };

  const renderContent = () => {
    if (content) {
      return content;
    }

    if (message) {
      return <p className="text-sm text-gray-300">{message}</p>;
    }

    return null;
  };

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={closeButtonRef}
        onClose={handleCloseDialog}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-tl-lg rounded-br-lg bg-gray-900 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  {modalState?.icon ? (
                    <div
                      className={clsx(
                        'mb-3 mx-auto flex h-12 w-12 items-center justify-center rounded-full',
                        modalState.backgroundColor,
                        'bg-opacity-50'
                      )}
                    >
                      {React.createElement(modalState.icon, {
                        className: clsx('h-6 w-6', modalState.color),
                        'aria-hidden': true,
                      })}
                    </div>
                  ) : null}
                  <div className="text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">{renderContent()}</div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                    <OutlineButton
                      type="button"
                      color="gray"
                      block
                      onClick={handleCloseDialog}
                      ref={closeButtonRef}
                    >
                      {closeButtonText ?? 'Close'}
                    </OutlineButton>
                    {actions ? actions : null}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
