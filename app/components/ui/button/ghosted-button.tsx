import clsx from 'clsx';
import * as React from 'react';

import { Spinner } from '../spinner';
import {
  buttonBlockStyles,
  type ButtonProps,
  buttonRoundedStyles,
  buttonSizes,
  disabledStyles,
  renderButtonIcon,
} from './utils';

/**
 * A ghosted button with no background when not hovered.
 */
export const GhostedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      type,
      block,
      size = 'md',
      rounded,
      icon,
      iconPosition = 'left',
      iconOnly,
      children,
      isLoading,
      loadingText = 'Loading...',
      disabled,
      ...rest
    },
    ref,
  ) => (
    <button
      className={clsx(
        buttonBlockStyles(block, iconPosition),
        buttonSizes(size),
        buttonRoundedStyles(rounded, size),
        'items-center justify-center border border-transparent font-medium text-blue-200 ring-offset-gray-900 hover:bg-blue-900 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none',
        disabledStyles,
        className,
      )}
      disabled={isLoading ?? disabled}
      ref={ref}
      style={style}
      type={type ?? 'button'}
      {...rest}
    >
      {renderButtonIcon({
        icon: isLoading ? Spinner : icon,
        size,
        additionalClasses: isLoading ? 'animate-spin' : undefined,
        iconPosition,
        iconOnly,
      })}
      <span {...(iconOnly ? { className: 'sr-only' } : {})}>{isLoading ? loadingText : children}</span>
    </button>
  ),
);

GhostedButton.displayName = 'GhostedButton';
