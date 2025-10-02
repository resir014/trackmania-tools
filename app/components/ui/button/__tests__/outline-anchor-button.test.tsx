import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { OutlineAnchorButton } from '../outline-anchor-button';

describe('OutlineAnchorButton', () => {
  it("defaults the color to 'blue' when no color props is provided", () => {
    render(<OutlineAnchorButton>Text</OutlineAnchorButton>);

    expect(screen.getByText('Text').closest('a')).toHaveClass('text-blue-500 border-blue-500 hover:bg-blue-900');
  });
});
