import { atom } from 'jotai';
import { WINDOWS } from '../types';

export const openedWindow = atom<WINDOWS | null>(null);
