import {
  CheckIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

export type ModalState = 'success' | 'info' | 'warning' | 'danger';

export function modalStates(state: ModalState = 'info') {
  switch (state) {
    case 'danger': {
      return {
        backgroundColor: 'bg-red-900',
        color: 'text-red-600',
        icon: ExclamationTriangleIcon,
      } as const;
    }
    case 'warning': {
      return {
        backgroundColor: 'bg-orange-900',
        color: 'text-orange-600',
        icon: ExclamationTriangleIcon,
      } as const;
    }
    case 'info': {
      return {
        backgroundColor: 'bg-blue-900',
        color: 'text-blue-600',
        icon: InformationCircleIcon,
      } as const;
    }
    case 'success': {
      return {
        backgroundColor: 'bg-green-900',
        color: 'text-green-600',
        icon: CheckIcon,
      } as const;
    }
    default: {
      return undefined;
    }
  }
}
