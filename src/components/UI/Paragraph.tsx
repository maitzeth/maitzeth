import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'light-gray' | 'gray' | 'black' | 'blue-light' | 'white' | 'whitesmoke';
  transform?: 'bold' | 'normal';
  truncate?: boolean;
  uppercase?: boolean;
}

const Paragraph = ({ children, className, size = 'md', color = 'black', transform = 'normal', uppercase, truncate }: Props) => {
  const textClass = classNames(className, {
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
  return <p className={textClass}>{children}</p>;
};

export default Paragraph;
