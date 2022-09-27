export enum WINDOWS {
  About = 'ABOUT',
  Portfolio = 'PORTFOLIO',
  WorkedTechs = 'WORKED_TECHNOLOGIES',
  Gaming = 'GAMING'
}

export interface Responsive<T> {
  mobile: T,
  desktop: T
}

export type Sizes = 'large' | 'medium' | 'small' | 'full';
export type Components = 'span' | 'div' | 'article' | 'section'
export type Directions = 'vertical' | 'horizontal';
export type SizeValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
