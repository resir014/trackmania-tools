import clsx from 'clsx';
import * as React from 'react';

import {
  type AnchorButtonProps,
  buttonBlockStyles,
  buttonRoundedStyles,
  buttonSizes,
  disabledStyles,
  renderButtonIcon,
  secondaryButtonColors,
} from './utils';

/**
 * Similar to `SecondaryButton`, but acts as a link.
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-9fc8ac3ded8cb313876bfa01742a0570
 */
export const SecondaryAnchorButton = React.forwardRef<HTMLAnchorElement, AnchorButtonProps>(
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
      ...rest
    },
    ref,
  ) => (
    <a
      className={clsx(
        buttonBlockStyles(block, iconPosition),
        buttonSizes(size),
        buttonRoundedStyles(rounded, size),
        'items-center justify-center border border-transparent font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none',
        secondaryButtonColors(color),
        disabledStyles,
        className,
      )}
      ref={ref}
      style={style}
      {...rest}
    >
      {renderButtonIcon({ icon, size, iconPosition, iconOnly })}
      <span {...(iconOnly ? { className: 'sr-only' } : {})}>{children}</span>
    </a>
  ),
);

SecondaryAnchorButton.displayName = 'SecondaryAnchorButton';
