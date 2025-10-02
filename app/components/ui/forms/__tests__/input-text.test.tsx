import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { InputText } from '../input-text';

describe('InputText', () => {
  it('renders correctly', () => {
    const { container } = render(<InputText />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
