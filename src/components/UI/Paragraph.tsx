import { PropsWithChildren, HTMLAttributes } from 'react';
import { PropsWithClassName } from '@/types';
import { cn } from '@/utils';

type Props = HTMLAttributes<HTMLParagraphElement> & PropsWithClassName<PropsWithChildren<{
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'light-gray' | 'gray' | 'black' | 'blue-light' | 'white' | 'whitesmoke';
  transform?: 'bold' | 'normal';
  truncate?: boolean;
  uppercase?: boolean;
}>>;

export const Paragraph = ({ children, className, size = 'md', color = 'black', transform = 'normal', uppercase, truncate, ...rest }: Props) => {
  const textClass = cn(className, {
    'text-xs': size === 'xs',
    'text-sm': size === 'sm',
    'text-base': size === 'md',
    'text-lg': size === 'lg',
    'text-black-light': color === 'light-gray',
    'text-gray-600': color === 'gray',
    'text-gray-700': color === 'black',
    'text-blue-light': color === 'blue-light',
    'text-white': color === 'white',
    'text-gray-200': color === 'whitesmoke',
    'font-normal': transform === 'normal',
    'font-bold': transform === 'bold',
    'uppercase': uppercase,
    'truncate': truncate
  })
  return <p className={textClass} {...rest}>{children}</p>;
};
