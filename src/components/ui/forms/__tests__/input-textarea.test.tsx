import * as React from 'react';
import { render } from '@testing-library/react';
import { InputTextarea } from '../input-textarea';

describe('InputText', () => {
  it('renders correctly', () => {
    const { container } = render(<InputTextarea />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
