import { createElement, PropsWithChildren, HTMLAttributes } from 'react';
import { Components, Responsive, Sizes, PropsWithClassName } from '@/types';
import { cn } from '@/utils';

type Props = HTMLAttributes<HTMLDivElement> & PropsWithClassName<PropsWithChildren<{
  component?: Components;
  size: Responsive<Sizes>;
  className?: string;
}>>;

export const Container = ({ component = 'div', children, size, className }: Props) => {
  const classes = cn('mx-auto', {
    'lg:max-w-7xl': size.desktop === 'large',
    'max-w-7xl': size.mobile === 'large',

    'lg:max-w-3xl': size.desktop === 'medium',
    'max-w-3xl': size.mobile === 'medium',

    'lg:max-w-lg': size.desktop === 'small',
    'max-w-lg': size.mobile === 'small',

    'lg:max-w-full': size.desktop === 'full',
    'max-w-full': size.mobile === 'full',
  }, className);

  return createElement(component, {
    className: classes
  }, children);
};
