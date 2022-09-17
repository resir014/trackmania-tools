/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { PlusIcon } from '@heroicons/react/24/outline';
import { render } from '@testing-library/react';
import { OutlineButton, PrimaryButton, SecondaryButton } from '../button';

describe('Button', () => {
  describe('PrimaryButton', () => {
    it('renders correctly', () => {
      const { container } = render(<PrimaryButton>test button</PrimaryButton>);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with correct colors', () => {
      const { container } = render(<PrimaryButton color="green">test button</PrimaryButton>);

      expect(container.firstChild).toHaveClass('bg-green-600', 'hover:bg-green-700');
    });

    it('renders proper rounded styles', () => {
      const { container } = render(<PrimaryButton rounded>test button</PrimaryButton>);

      expect(container.firstChild).toHaveClass('rounded-full');
    });

    it('renders with correct sizes', () => {
      const { container } = render(<PrimaryButton size="sm">test button</PrimaryButton>);

      expect(container.firstChild).toHaveClass('px-3', 'py-2', 'text-sm', 'leading-4');
    });

    it('renders right icon with the correct classes', () => {
      const { container } = render(
        <PrimaryButton icon={PlusIcon} iconPosition="right">
          test button
        </PrimaryButton>
      );

      expect(container.firstChild).toHaveClass('inline-flex', 'flex-row-reverse');

      expect(container.querySelector('svg')).toHaveClass('ml-2', '-mr-1', 'h-5', 'w-5');
    });

    it('renders custom styles', () => {
      const { container } = render(
        <PrimaryButton className="text-white bg-green-500 focus:ring-green-500" color="none">
          test button
        </PrimaryButton>
      );

      expect(container.firstChild).toHaveClass(
        'text-white',
        'bg-green-500',
        'focus:ring-green-500'
      );
    });
  });

  describe('SecondaryButton', () => {
    it('renders correctly', () => {
      const { container } = render(<SecondaryButton>test button</SecondaryButton>);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with correct colors', () => {
      const { container } = render(<SecondaryButton color="blue">test button</SecondaryButton>);

      expect(container.firstChild).toHaveClass('text-blue-200', 'bg-blue-900', 'hover:bg-blue-800');
    });

    it('renders proper rounded styles', () => {
      const { container } = render(<SecondaryButton rounded>test button</SecondaryButton>);

      expect(container.firstChild).toHaveClass('rounded-full');
    });

    it('renders right icon with the correct classes', () => {
      const { container } = render(
        <SecondaryButton icon={PlusIcon} iconPosition="right">
          test button
        </SecondaryButton>
      );

      expect(container.firstChild).toHaveClass('inline-flex', 'flex-row-reverse');

      expect(container.querySelector('svg')).toHaveClass('ml-2', '-mr-1', 'h-5', 'w-5');
    });

    it('renders custom styles', () => {
      const { container } = render(
        <SecondaryButton
          className="text-green-700 bg-green-100 hover:bg-green-200 focus:ring-green-500"
          color="none"
        >
          test button
        </SecondaryButton>
      );

      expect(container.firstChild).toHaveClass(
        'text-green-700',
        'bg-green-100',
        'hover:bg-green-200',
        'focus:ring-green-500'
      );
    });
  });

  describe('OutlineButton', () => {
    it('renders correctly', () => {
      const { container } = render(<OutlineButton>test button</OutlineButton>);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with correct colors', () => {
      const { container } = render(<OutlineButton color="blue">test button</OutlineButton>);

      expect(container.firstChild).toHaveClass(
        'text-blue-500',
        'border-blue-500',
        'hover:bg-blue-900'
      );
    });

    it('renders proper rounded styles', () => {
      const { container } = render(<OutlineButton rounded>test button</OutlineButton>);

      expect(container.firstChild).toHaveClass('rounded-full');
    });

    it('renders with correct sizes', () => {
      const { container } = render(<OutlineButton size="lg">test button</OutlineButton>);

      expect(container.firstChild).toHaveClass('px-4', 'py-2', 'text-base');
    });

    it('renders right icon with the correct classes', () => {
      const { container } = render(
        <OutlineButton icon={PlusIcon} iconPosition="right">
          test button
        </OutlineButton>
      );

      expect(container.firstChild).toHaveClass('inline-flex', 'flex-row-reverse');

      expect(container.querySelector('svg')).toHaveClass('ml-2', '-mr-1', 'h-5', 'w-5');
    });

    it('renders custom styles', () => {
      const { container } = render(
        <OutlineButton className="text-green-500 border-green-500 hover:bg-green-100" color="none">
          test button
        </OutlineButton>
      );

      expect(container.firstChild).toHaveClass(
        'text-green-500',
        'border-green-500',
        'hover:bg-green-100'
      );
    });
  });
});
