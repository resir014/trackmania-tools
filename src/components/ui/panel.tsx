import clsx from 'clsx';
import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { modalOverlayStyles } from './modal';

export type PanelSizes = 'sm' | 'lg';

export interface PanelProps {
  isOpen?: boolean;
  title: string;
  description?: string;
  isBorderless?: boolean;
  size?: PanelSizes;
  content?: React.ReactNode;
  onClose?: () => void;
  actions?: React.ReactNode;
}

export function Panel({
  isOpen,
  title,
  description,
  isBorderless,
  size = 'sm',
  children,
  onClose,
  actions,
}: React.PropsWithChildren<PanelProps>) {
  const closeButtonRef = React.useRef(null);

  const handleClosePanel = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClosePanel}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={modalOverlayStyles} />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={React.Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel
                  className={clsx(
                    'pointer-events-auto w-screen',
                    size === 'lg' ? 'max-w-2xl' : 'max-w-md'
                  )}
                >
                  <div className="flex h-full flex-col divide-y divide-gray-700 bg-gray-900 shadow-xl">
                    <div
                      className={clsx(
                        'flex h-full flex-col overflow-y-auto pt-6',
                        !isBorderless && 'pb-6'
                      )}
                    >
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">
                            {title}
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-gray-900 text-blue-200 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                              onClick={handleClosePanel}
                              ref={closeButtonRef}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        {description ? (
                          <div className="mt-1">
                            <p className="text-sm text-gray-300">{description}</p>
                          </div>
                        ) : null}
                      </div>
                      <div
                        className={clsx(
                          'flex flex-col relative mt-6 flex-1',
                          !isBorderless && 'px-4 sm:px-6'
                        )}
                      >
                        {children}
                      </div>
                    </div>
                    {actions ? (
                      <div className="flex flex-shrink-0 justify-end px-4 pb-4 pt-4">{actions}</div>
                    ) : null}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
