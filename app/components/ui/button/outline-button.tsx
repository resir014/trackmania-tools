import clsx from 'clsx';
import * as React from 'react';

import { Spinner } from '../spinner';
import {
  buttonBlockStyles,
  type ButtonProps,
  buttonRoundedStyles,
  buttonSizes,
  disabledStyles,
  outlineButtonColors,
  renderButtonIcon,
} from './utils';

/**
 * Button component used for primary actions.
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-80fd0d5ac7982f1a83b171bb0fb9e116
 */
export const OutlineButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      type,
      block,
      size = 'md',
      color = 'blue',
      rounded,
      icon,
      iconPosition = 'left',
      isLoading,
      loadingText = 'Loading...',
      iconOnly,
      disabled,
      children,
      ...rest
    },
    ref,
  ) => (
    <button
      className={clsx(
        buttonBlockStyles(block, iconPosition),
        buttonSizes(size),
        buttonRoundedStyles(rounded, size),
        'items-center justify-center border font-medium shadow-sm ring-offset-gray-900 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none',
        outlineButtonColors(color),
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

OutlineButton.displayName = 'OutlineButton';
