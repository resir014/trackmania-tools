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
  secondaryButtonColors,
} from './utils';

/**
 * A secondary button variant for actions that complement the primary button action.
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-9fc8ac3ded8cb313876bfa01742a0570
 */
export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
        'items-center justify-center border border-transparent font-medium ring-offset-gray-900 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none',
        secondaryButtonColors(color),
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

SecondaryButton.displayName = 'SecondaryButton';
