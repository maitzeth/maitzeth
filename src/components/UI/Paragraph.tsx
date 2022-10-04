import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'gray' | 'black';
}

const Paragraph = ({ children, className, size = 'md', color = 'black' }: Props) => {
  const textClass = classNames(className, {
    'text-xs': size === 'xs',
    'text-sm': size === 'sm',
    'text-base': size === 'md',
    'text-lg': size === 'lg',
    'text-gray-600': color === 'gray',
    'text-gray-700': color === 'black',
  })
  return <p className={textClass}>{children}</p>;
};

export default Paragraph;
