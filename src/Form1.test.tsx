import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Form1 } from './Form1';

expect.extend(toHaveNoViolations);

test('Should not violate accessibility rules', async () => {
  const { container } = render(<Form1 />);
  expect(await axe(container)).toHaveNoViolations();
});
