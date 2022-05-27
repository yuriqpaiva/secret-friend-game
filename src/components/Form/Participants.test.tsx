import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '../../state/hooks/useParticipantList';
import ParticipantList from './ParticipantList';

jest.mock('../../state/hooks/useParticipantList', () => {
  // Saying to jest that useParticipantList is a function
  return {
    useParticipantList: jest.fn(),
  };
});

describe('Empty list of participants', () => {

  // Simulating useParticipantList function return to be an empty list
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });

  test('List must be rendered with no participants', () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    // query: do not returns errors when component is not rendered
    // get: returns error when component is not rendered
    const items = screen.queryAllByRole('listitem');

    expect(items).toHaveLength(0);
  });
});

describe('Fulfilled list of participants', () => {
  const participants = ['Ana', 'Catarina'];

  // Simulating useParticipantList function return to be participants
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
  });

  test('Participants are being rendered in the list', () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole('listitem');

    expect(items).toHaveLength(participants.length);
  });
});
