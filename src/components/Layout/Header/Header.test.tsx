import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header component', () => {
  test('Check if Header is rendering', () => {
    render(<Header />);

    const headerComponent = screen.getByRole('heading');

    expect(headerComponent).toBeInTheDocument();
  });

  test('Check if Header logo picture is rendering', () => {
    const { getByRole } = render(<Header />);

    const headerPicture = getByRole('img');

    expect(headerPicture).toHaveAttribute('src', 'participante.png');
  });

  test('Check if logo picture is rendering', () => {
    const { getByTestId } = render(<Header />);

    const logo = getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });
});
