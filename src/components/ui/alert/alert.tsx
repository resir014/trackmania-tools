import * as React from 'react';

import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { alertColors, AlertProps, renderAlertIcon } from './utils';

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ children, className, color = 'yellow', dismissible, icon, visible = true, ...rest }, ref) => {
    const [_visible, setVisible] = React.useState(visible);

    return (
      <Transition
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={_visible}
      >
        <div
          className={clsx(alertColors(color), 'p-4 rounded-lg', className)}
          role="alert"
          {...rest}
          ref={ref}
        >
          <div className="flex justify-between">
            <div className="flex">
              {icon ? <div className="flex-shrink-0 mr-3">{renderAlertIcon(icon)}</div> : null}
              <div>{children}</div>
            </div>
            {dismissible ? (
              <button
                className={`close-button text-${color}-400 hover:text-${color}-500`}
                onClick={() => setVisible(false)}
              >
                <XMarkIcon aria-hidden="true" className="flex-shrink-0 h-6 w-5" />
                <span className="sr-only">Close</span>
              </button>
            ) : null}
          </div>
        </div>
      </Transition>
    );
  }
);

Alert.displayName = 'Alert';
