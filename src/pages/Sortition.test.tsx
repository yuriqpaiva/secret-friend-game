import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '../state/hooks/useParticipantList';
import { useSortitionResult } from '../state/hooks/useSortitionResult';
import Sortition from './Sortition';

jest.mock('../state/hooks/useParticipantList', () => {
  // Saying to jest that useParticipantList is a function
  return {
    useParticipantList: jest.fn(),
  };
});

jest.mock('../state/hooks/useSortitionResult', () => {
  // Saying to jest that useParticipantList is a function
  return {
    useSortitionResult: jest.fn(),
  };
});

describe('Draw screen', () => {
  const participants = ['Ana', 'Catarina', 'João'];

  const result = new Map([
    ['Ana', 'João'],
    ['Catarina', 'Ana'],
    ['João', 'Catarina'],
  ]);

  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
    (useSortitionResult as jest.Mock).mockReturnValue(result);
  });

  test('All participants can show their secret friend', () => {
    render(
      <RecoilRoot>
        <Sortition />
      </RecoilRoot>
    );
    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(participants.length + 1);
  });

  test('Secret friend is rendered when requested', () => {
    render(
      <RecoilRoot>
        <Sortition />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');

    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const secretFriend = screen.getByRole('alert');

    expect(secretFriend).toBeInTheDocument();
  });
});
