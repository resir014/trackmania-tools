import * as React from 'react';
import { render } from '@testing-library/react';
import { InputText } from '../input-text';

describe('InputText', () => {
  it('renders correctly', () => {
    const { container } = render(<InputText />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
