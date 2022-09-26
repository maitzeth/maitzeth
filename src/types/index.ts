export enum WINDOWS {
  About = 'ABOUT',
  Portfolio = 'PORTFOLIO',
}

export interface Responsive<T> {
  mobile: T,
  desktop: T
}

export type Directions = 'vertical' | 'horizontal';
export type SizeValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
