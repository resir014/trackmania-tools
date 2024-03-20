/* This example requires Tailwind CSS v2.0+ */
import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { OutlineButton } from '~/components/ui/button';
import { modalOverlayStyles } from '~/components/ui/modal';
import { BracketBuilderLogo } from './bracket-builder-logo';
export interface AboutModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const closeButtonRef = React.useRef(null);

  const handleCloseDialog = () => {
    if (onClose) {
      onClose();
    }
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
          <div className={modalOverlayStyles} />
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 bg-opacity-50 sm:mx-0 sm:h-10 sm:w-10">
                    <BracketBuilderLogo className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                      Bracket Builder
                    </Dialog.Title>
                    <div className="mt-2 space-y-3">
                      <p className="text-sm text-gray-300">
                        A supplementary tool to generate brackets for the official Trackmania{' '}
                        <a
                          href="https://admin.trackmania.nadeo.club/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:underline"
                        >
                          competition tool
                        </a>
                        . To learn more about the competition tool, read their{' '}
                        <a
                          href="https://doc.trackmania.com/competition-tool/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:underline"
                        >
                          official documentation
                        </a>
                        .
                      </p>
                      <p className="text-sm text-gray-300">
                        &copy; 2022 resir014. Source code available under the{' '}
                        <a
                          href="https://github.com/resir014/trackmania-tools"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:underline"
                        >
                          MIT licence
                        </a>
                        . This project is not affiliated with Trackmania or Ubisoft Nadeo.
                      </p>
                      <h4 className="text-md font-medium leading-6 text-white">Special Thanks</h4>
                      <ul>
                        <li className="text-sm text-gray-300">
                          <a
                            href="https://twitter.com/Crawron"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:underline"
                          >
                            @Crawron
                          </a>{' '}
                          for the logo + a bit of design help.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:ml-10 sm:flex sm:pl-4">
                  <OutlineButton
                    type="button"
                    color="gray"
                    onClick={handleCloseDialog}
                    ref={closeButtonRef}
                  >
                    Close
                  </OutlineButton>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
