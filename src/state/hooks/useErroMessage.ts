import { useRecoilValue } from 'recoil';
import { erroState } from '../atom';

export const useErroMessage = () => {
  const message = useRecoilValue(erroState);

  return message;
};
