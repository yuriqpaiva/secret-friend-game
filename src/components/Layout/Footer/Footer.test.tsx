import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '../../../state/hooks/useParticipantList';
import Footer from '.';
import { useNavigate } from 'react-router-dom';
import {} from '../../../state/hooks/useSortition';

jest.mock('../../../state/hooks/useParticipantList', () => {
  // Saying to jest that useParticipantList is a function
  return {
    useParticipantList: jest.fn(),
  };
});

const mockNavigation = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigation,
}));

const mockSortition = jest.fn();
jest.mock('../../../state/hooks/useSortition', () => ({
  useSortition: () => mockSortition,
}));

describe('Where not exists enough participants', () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });

  test('Cannot be started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});

describe('When there are suficient participants', () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([
      'Ana',
      'Gabriel',
      'José',
    ]);
  });

  test('Can be started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).toBeEnabled();
  });

  test('Route changed', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockNavigation).toBeCalledWith('/sorteio');
    expect(mockSortition).toHaveBeenCalledTimes(1);
  });
});
