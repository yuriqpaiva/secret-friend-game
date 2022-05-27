import { atom } from 'recoil';

export const participantListState = atom<string[]>({
  key: 'participantListState',
  default: [],
});

export const erroState = atom<string>({
  key: 'erroState',
  default: '',
});

export const sortitionResult = atom<Map<string, string>>({
  key: 'sortitionResult',
  default: new Map(),
});
