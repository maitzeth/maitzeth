import { atom } from 'jotai';
import { WINDOWS, ValuesOf, Maybe } from '@/types';

export const openedWindow = atom<Maybe<ValuesOf<typeof WINDOWS>>>(null);
