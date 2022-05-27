import shuffle from 'just-shuffle';

export const makeSortition = (participants: string[]) => {
  const participantsTotal = participants.length;

  const randomizedParticipants = shuffle(participants);

  const result = new Map<string, string>();

  for (let index = 0; index < participantsTotal; index++) {
    const friendIndex = index === participantsTotal - 1 ? 0 : index + 1;

    result.set(
      randomizedParticipants[index],
      randomizedParticipants[friendIndex]
    );
  }
  
  return result;
};
