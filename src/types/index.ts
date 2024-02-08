// Generics
export type ValuesOf<T> = T[keyof T];
export type KeysOf<T> = keyof T;
export type Maybe<T> = T | null;
export type Optional<T> = T | undefined;
export type PropsWithClassName<T = unknown> = T & {
  className?: string;
};
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
// End Generics

export const WINDOWS = {
  About: 0,
  Portfolio: 1
} as const;

export enum THEME {
  light = 'LIGHT',
  dark = 'DARK',
}

export interface Responsive<T> {
  mobile?: T,
  desktop?: T
}

export type Sizes = 'large' | 'medium' | 'small' | 'full';
export type Components = 'span' | 'div' | 'article' | 'section'
export type Directions = 'vertical' | 'horizontal';
export type SizeValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface ScreensConfig<T> {
  sm: T;
  md: T;
  lg: T;
  xl: T;
  '2xl': T;
  [key: string]: T;
};
