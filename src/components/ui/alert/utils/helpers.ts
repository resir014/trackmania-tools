import * as React from 'react';

import clsx from 'clsx';
import { BaseColors } from '../../types';
import { AlertProps } from './types';

export function alertColors(color?: BaseColors) {
  switch (color) {
    case 'blue': {
      return 'bg-blue-900 bg-opacity-50 text-blue-300';
    }
    case 'gray': {
      return 'bg-gray-900 bg-opacity-50 text-gray-300';
    }
    case 'green': {
      return 'bg-green-900 bg-opacity-50 text-green-300';
    }
    case 'indigo': {
      return 'bg-indigo-900 bg-opacity-50 text-indigo-300';
    }
    case 'pink': {
      return 'bg-pink-900 bg-opacity-50 text-pink-300';
    }
    case 'light-blue': {
      return 'bg-light-blue-900 bg-opacity-50 text-light-blue-300';
    }
    case 'purple': {
      return 'bg-purple-900 bg-opacity-50 text-purple-300';
    }
    case 'red': {
      return 'bg-red-900 bg-opacity-50 text-red-300';
    }
    case 'yellow': {
      return 'bg-yellow-900 bg-opacity-50 text-yellow-300';
    }
    default: {
      return 'bg-yellow-900 bg-opacity-50 text-yellow-300';
    }
  }
}

export function renderAlertIcon(icon?: AlertProps['icon'], additionalClasses?: string) {
  if (icon) {
    return React.createElement(icon, {
      className: clsx('h-6 w-5', additionalClasses),
      'aria-hidden': true,
    });
  }

  return null;
}
