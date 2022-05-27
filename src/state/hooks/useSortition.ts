import { useSetRecoilState } from 'recoil';
import { sortitionResult } from '../atom';
import { makeSortition } from '../helpers/makeSortition';
import { useParticipantList } from './useParticipantList';

export const useSortition = () => {
  const participants = useParticipantList();
  const setResult = useSetRecoilState(sortitionResult);

  return () => {
    const result = makeSortition(participants);
    setResult(result);
  };
};
