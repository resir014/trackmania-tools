import { PlusIcon } from '@heroicons/react/24/outline';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { OutlineButton, PrimaryButton, SecondaryButton } from '../button';

describe('Button', () => {
  describe('PrimaryButton', () => {
    test('renders correctly', () => {
      const { container } = render(<PrimaryButton>test button</PrimaryButton>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders with correct colors', () => {
      const { container } = render(<PrimaryButton color="green">test button</PrimaryButton>);

      expect(container.firstChild).toHaveClass('bg-green-600', 'hover:bg-green-700');
    });

    test('renders proper rounded styles', () => {
      const { container } = render(<PrimaryButton rounded>test button</PrimaryButton>);

      expect(container.firstChild).toHaveClass('rounded-full');
    });

    test('renders with correct sizes', () => {
      const { container } = render(<PrimaryButton size="sm">test button</PrimaryButton>);

      expect(container.firstChild).toHaveClass('px-3', 'py-2', 'text-sm', 'leading-4');
    });

    test('renders right icon with the correct classes', () => {
      const { container } = render(
        <PrimaryButton icon={PlusIcon} iconPosition="right">
          test button
        </PrimaryButton>,
      );

      expect(container.firstChild).toHaveClass('inline-flex', 'flex-row-reverse');

      expect(container.querySelector('svg')).toHaveClass('ml-2', '-mr-1', 'h-5', 'w-5');
    });

    test('renders custom styles', () => {
      const { container } = render(
        <PrimaryButton className="bg-green-500 text-white focus:ring-green-500" color="none">
          test button
        </PrimaryButton>,
      );

      expect(container.firstChild).toHaveClass('text-white', 'bg-green-500', 'focus:ring-green-500');
    });
  });

  describe('SecondaryButton', () => {
    test('renders correctly', () => {
      const { container } = render(<SecondaryButton>test button</SecondaryButton>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders with correct colors', () => {
      const { container } = render(<SecondaryButton color="blue">test button</SecondaryButton>);

      expect(container.firstChild).toHaveClass('text-blue-200', 'bg-blue-900', 'hover:bg-blue-800');
    });

    test('renders proper rounded styles', () => {
      const { container } = render(<SecondaryButton rounded>test button</SecondaryButton>);

      expect(container.firstChild).toHaveClass('rounded-full');
    });

    test('renders right icon with the correct classes', () => {
      const { container } = render(
        <SecondaryButton icon={PlusIcon} iconPosition="right">
          test button
        </SecondaryButton>,
      );

      expect(container.firstChild).toHaveClass('inline-flex', 'flex-row-reverse');

      expect(container.querySelector('svg')).toHaveClass('ml-2', '-mr-1', 'h-5', 'w-5');
    });

    test('renders custom styles', () => {
      const { container } = render(
        <SecondaryButton className="bg-green-100 text-green-700 hover:bg-green-200 focus:ring-green-500" color="none">
          test button
        </SecondaryButton>,
      );

      expect(container.firstChild).toHaveClass(
        'text-green-700',
        'bg-green-100',
        'hover:bg-green-200',
        'focus:ring-green-500',
      );
    });
  });

  describe('OutlineButton', () => {
    test('renders correctly', () => {
      const { container } = render(<OutlineButton>test button</OutlineButton>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('renders with correct colors', () => {
      const { container } = render(<OutlineButton color="blue">test button</OutlineButton>);

      expect(container.firstChild).toHaveClass('text-blue-500', 'border-blue-500', 'hover:bg-blue-900');
    });

    test('renders proper rounded styles', () => {
      const { container } = render(<OutlineButton rounded>test button</OutlineButton>);

      expect(container.firstChild).toHaveClass('rounded-full');
    });

    test('renders with correct sizes', () => {
      const { container } = render(<OutlineButton size="lg">test button</OutlineButton>);

      expect(container.firstChild).toHaveClass('px-4', 'py-2', 'text-base');
    });

    test('renders right icon with the correct classes', () => {
      const { container } = render(
        <OutlineButton icon={PlusIcon} iconPosition="right">
          test button
        </OutlineButton>,
      );

      expect(container.firstChild).toHaveClass('inline-flex', 'flex-row-reverse');

      expect(container.querySelector('svg')).toHaveClass('ml-2', '-mr-1', 'h-5', 'w-5');
    });

    test('renders custom styles', () => {
      const { container } = render(
        <OutlineButton className="border-green-500 text-green-500 hover:bg-green-100" color="none">
          test button
        </OutlineButton>,
      );

      expect(container.firstChild).toHaveClass('text-green-500', 'border-green-500', 'hover:bg-green-100');
    });
  });
});
