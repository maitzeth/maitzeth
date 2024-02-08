import { createElement, PropsWithChildren, HTMLAttributes } from 'react';
import { use100vh } from 'react-div-100vh';
import { PropsWithClassName } from '@/types';

type FullHeightProps = HTMLAttributes<HTMLDivElement> & PropsWithClassName<PropsWithChildren<{
  component: 'div' | 'main' | 'section' | 'article' ;
  divider?: number;
}>>;

export const FullHeight = ({
  component,
  divider = 1,
  className,
  children,
}: FullHeightProps) => {
  const height = use100vh();

  const totalHeight = height ? height / divider : '100vh';

  return createElement(
    component,
    {
      style: {
        minHeight: totalHeight,
      },
      className,
      'data-testid': 'fullheight',
    },
    children
  );
};
