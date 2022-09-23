import * as React from 'react';

import clsx from 'clsx';
import { ButtonColors, ButtonIconPositions, ButtonProps, ButtonSizes } from './types';

export const disabledStyles = 'disabled:cursor-not-allowed disabled:opacity-75';

export function buttonBlockStyles(block?: boolean, iconPosition: ButtonIconPositions = 'left') {
  return [
    block ? 'flex w-full' : 'inline-flex',
    iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row',
  ];
}

export function buttonSizes(size?: ButtonSizes) {
  switch (size) {
    case 'xs': {
      return 'px-2.5 py-1.5 text-xs';
    }
    case 'sm': {
      return 'px-3 py-2 text-sm leading-4';
    }
    case 'md': {
      return 'px-4 py-2 text-sm';
    }
    case 'lg': {
      return 'px-4 py-2 text-base';
    }
    case 'xl': {
      return 'px-6 py-3 text-base';
    }
    default: {
      return 'px-4 py-2 text-sm';
    }
  }
}

export function buttonRoundedStyles(rounded?: boolean, size?: ButtonSizes) {
  if (rounded) {
    return 'rounded-full';
  }

  if (size !== 'xs') {
    return 'rounded-tl-md rounded-br-md';
  }

  return 'rounded-tl rounded-br';
}

export function buttonIconClasses(
  size?: ButtonSizes,
  iconPosition: ButtonIconPositions = 'left',
  iconOnly = false
) {
  switch (size) {
    case 'xs': {
      return [
        ...(iconOnly
          ? ['-ml-0.5 -mr-0.5']
          : [iconPosition === 'right' ? 'ml-2 -mr-0.5' : '-ml-0.5 mr-2']),
        'h-4 w-4',
      ];
    }
    case 'sm': {
      return [
        ...(iconOnly
          ? ['-ml-0.5 -mr-0.5']
          : [iconPosition === 'right' ? 'ml-2 -mr-0.5' : '-ml-0.5 mr-2']),
        'h-4 w-4',
      ];
    }
    case 'md': {
      return [
        ...(iconOnly ? ['-ml-1 -mr-1'] : [iconPosition === 'right' ? 'ml-2 -mr-1' : '-ml-1 mr-2']),
        'h-5 w-5',
      ];
    }
    case 'lg': {
      return [
        ...(iconOnly ? ['-ml-1 -mr-1'] : [iconPosition === 'right' ? 'ml-3 -mr-1' : '-ml-1 mr-3']),
        'h-5 w-5',
      ];
    }
    case 'xl': {
      return [
        ...(iconOnly ? ['-ml-1 -mr-1'] : [iconPosition === 'right' ? 'ml-3 -mr-1' : '-ml-1 mr-3']),
        'h-5 w-5',
      ];
    }
    default: {
      return [
        ...(iconOnly ? ['-ml-1 -mr-1'] : [iconPosition === 'right' ? 'ml-2 -mr-1' : '-ml-1 mr-2']),
        'h-5 w-5',
      ];
    }
  }
}

export function primaryButtonColors(color?: ButtonColors) {
  switch (color) {
    case 'blue': {
      return 'text-white bg-blue-600 hover:bg-blue-700';
    }
    case 'gray': {
      return 'text-white bg-gray-600 hover:bg-gray-700';
    }
    case 'green': {
      return 'text-white bg-green-600 hover:bg-green-700';
    }
    case 'indigo': {
      return 'text-white bg-indigo-600 hover:bg-indigo-700';
    }
    case 'light-blue': {
      return 'text-white bg-light-blue-400 hover:bg-light-blue-500';
    }
    case 'pink': {
      return 'text-white bg-pink-600 hover:bg-pink-700';
    }
    case 'purple': {
      return 'text-white bg-purple-600 hover:bg-purple-700';
    }
    case 'red': {
      return 'text-white bg-red-600 hover:bg-red-700';
    }
    case 'yellow': {
      return 'text-white bg-yellow-600 hover:bg-yellow-700';
    }
    case 'none': {
      return undefined;
    }
    default: {
      return 'text-white bg-gray-600 hover:bg-gray-700';
    }
  }
}

export function secondaryButtonColors(color?: ButtonColors) {
  switch (color) {
    case 'blue': {
      return 'text-blue-200 bg-blue-900 hover:bg-blue-800';
    }
    case 'gray': {
      return 'text-gray-200 bg-gray-900 hover:bg-gray-800';
    }
    case 'green': {
      return 'text-green-200 bg-green-900 hover:bg-green-800';
    }
    case 'indigo': {
      return 'text-indigo-200 bg-indigo-900 hover:bg-indigo-800';
    }
    case 'light-blue': {
      return 'text-light-blue-200 bg-light-blue-900 hover:bg-light-blue-800';
    }
    case 'pink': {
      return 'text-pink-200 bg-pink-900 hover:bg-pink-800';
    }
    case 'purple': {
      return 'text-purple-200 bg-purple-900 hover:bg-purple-800';
    }
    case 'red': {
      return 'text-red-200 bg-red-900 hover:bg-red-800';
    }
    case 'yellow': {
      return 'text-yellow-200 bg-yellow-900 hover:bg-yellow-800';
    }
    case 'none': {
      return undefined;
    }
    default: {
      return 'text-gray-200 bg-gray-900 hover:bg-gray-800';
    }
  }
}

export function outlineButtonColors(color?: ButtonColors) {
  switch (color) {
    case 'blue': {
      return 'text-blue-500 border-blue-500 hover:bg-blue-900';
    }
    case 'gray': {
      return 'text-gray-200 border-gray-200 hover:bg-gray-800';
    }
    case 'green': {
      return 'text-green-500 border-green-500 hover:bg-green-900';
    }
    case 'indigo': {
      return 'text-indigo-500 border-indigo-500 hover:bg-indigo-900';
    }
    case 'light-blue': {
      return 'text-light-blue-400 border-light-blue-400 hover:bg-light-blue-900';
    }
    case 'pink': {
      return 'text-pink-500 border-pink-500 hover:bg-pink-900';
    }
    case 'purple': {
      return 'text-purple-500 border-purple-500 hover:bg-purple-900';
    }
    case 'red': {
      return 'text-red-500 border-red-500 hover:bg-red-900';
    }
    case 'yellow': {
      return 'text-yellow-500 border-yellow-500 hover:bg-yellow-900';
    }
    case 'none': {
      return undefined;
    }
    default: {
      return 'text-gray-700 border-gray-700 hover:bg-gray-900';
    }
  }
}

export function renderButtonIcon({
  icon,
  size,
  additionalClasses,
  iconPosition = 'left',
  iconOnly = false,
}: {
  icon?: ButtonProps['icon'];
  size?: ButtonSizes;
  additionalClasses?: string;
  iconPosition?: ButtonIconPositions;
  iconOnly?: boolean;
}) {
  if (icon) {
    return React.createElement(icon, {
      className: clsx(buttonIconClasses(size, iconPosition, iconOnly), additionalClasses),
      'aria-hidden': true,
    });
  }

  return null;
}
