import { PropsWithChildren, createElement, HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLHeadingElement> & PropsWithChildren<{
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>

export const Title = ({ children, component }: Props) => {
  return createElement(
    component,
    { className: 'text-gray-800 text-3xl font-bold' },
    children
  );
};
