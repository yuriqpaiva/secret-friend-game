import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Configuration from './Configuration';

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => ({
 useNavigate: () => mockNavigation,
}));

describe('Configuration page', () => {
  test('Must be rendered correctly', () => {
    const { container } = render(
      <RecoilRoot>
        <Configuration />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
