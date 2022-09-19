import React from 'react';

import { screen, fireEvent, render } from '@testing-library/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { Alert } from '../alert';

describe('Alert', () => {
  it('renders correctly', () => {
    render(<Alert>Test Alert</Alert>);

    expect(screen.getByRole('alert')).toBeVisible();
  });

  it('renders with correct customization', () => {
    const { container } = render(
      <Alert className="winke" color="red" dismissible={true} icon={BellIcon} visible={true}>
        Test Customize Alert
      </Alert>
    );
    expect(container.firstChild?.firstChild).toHaveClass(
      'bg-red-900',
      'bg-opacity-50',
      'text-red-300'
    );
    expect(container.firstChild?.firstChild).toHaveClass('p-4', 'winke');

    expect(container.getElementsByClassName('flex-shrink-0 mr-3')[0].hasChildNodes()).toBeTruthy();

    expect(screen.getByRole('button')).toHaveClass(`close-button text-red-400 hover:text-red-500`);

    fireEvent.click(screen.getByRole('button'));
  });
});
