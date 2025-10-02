import clsx from 'clsx';
import * as React from 'react';

import {
  type AnchorButtonProps,
  buttonBlockStyles,
  buttonRoundedStyles,
  buttonSizes,
  disabledStyles,
  outlineButtonColors,
  renderButtonIcon,
} from './utils';

/**
 * Similar to `PrimaryButton`, but acts as a link.
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-80fd0d5ac7982f1a83b171bb0fb9e116
 */
export const OutlineAnchorButton = React.forwardRef<HTMLAnchorElement, AnchorButtonProps>(
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
        'items-center justify-center border font-medium shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none',
        outlineButtonColors(color),
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

OutlineAnchorButton.displayName = 'OutlineAnchorButton';
