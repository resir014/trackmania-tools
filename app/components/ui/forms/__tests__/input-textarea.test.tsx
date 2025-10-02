import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { InputTextarea } from '../input-textarea';

describe('InputText', () => {
  it('renders correctly', () => {
    const { container } = render(<InputTextarea />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
