import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Form3 } from './Form3';

expect.extend(toHaveNoViolations);

test('Should not violate accessibility rules when first rendered', async () => {
  const { container } = render(<Form3 />);
  expect(await axe(container)).toHaveNoViolations();
});

test('Should not violate accessibility rules when invalid form submitted', async () => {
  const { container } = render(<Form3 />);
  userEvent.click(screen.getByText('Submit'));
  await screen.findByText('You must enter your name');
  expect(await axe(container)).toHaveNoViolations();
});
