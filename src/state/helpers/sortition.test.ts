import { makeSortition } from './makeSortition';

describe('Secret friend sortition', () => {
  test('Each participant must not gets their own names', () => {
    const participants = ['Ana', 'João', 'Vinicius', 'Natália'];

    const sortition = makeSortition(participants);

    participants.forEach((participant) => {
      const secretFriend = sortition.get(participant);
      expect(secretFriend).not.toEqual(participant);
    });
  });
});
