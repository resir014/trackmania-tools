import clsx from 'clsx';
import * as React from 'react';

import {
  type AnchorButtonProps,
  buttonBlockStyles,
  buttonRoundedStyles,
  buttonSizes,
  disabledStyles,
  renderButtonIcon,
} from './utils';

/**
 * A ghosted button with no background when not hovered.
 */
export const GhostedAnchorButton = React.forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  (
    { className, style, type, block, size = 'md', rounded, icon, iconPosition = 'left', iconOnly, children, ...rest },
    ref,
  ) => (
    <a
      className={clsx(
        buttonBlockStyles(block, iconPosition),
        buttonSizes(size),
        buttonRoundedStyles(rounded, size),
        'items-center justify-center border border-transparent font-medium text-blue-200 hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none',
        disabledStyles,
        className,
      )}
      ref={ref}
      style={style}
      type={type ?? 'button'}
      {...rest}
    >
      {renderButtonIcon({ icon, size, iconPosition })}
      <span {...(iconOnly ? { className: 'sr-only' } : {})}>{children}</span>
    </a>
  ),
);

GhostedAnchorButton.displayName = 'GhostedAnchorButton';
