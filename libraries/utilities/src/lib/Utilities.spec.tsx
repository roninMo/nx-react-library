import { render } from '@testing-library/react';

import Utilities from './Utilities';

describe('Utilities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Utilities />);
    expect(baseElement).toBeTruthy();
  });
});
