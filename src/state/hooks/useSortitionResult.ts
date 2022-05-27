import { useRecoilValue } from 'recoil';
import { sortitionResult } from '../atom';

export const useSortitionResult = () => {
  return useRecoilValue(sortitionResult);
};
