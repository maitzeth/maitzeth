import React from 'react';
import classNames from 'classnames';
import { Responsive } from '../../types';

type Props = {
  children: React.ReactNode;
  component?: 'span' | 'div' | 'article' | 'section';
  className?: string;
  display: Responsive<'none' | 'block' | 'flex'>;
}

const Box = ({ display, component = 'div', children, className }: Props) => {
  const classes = classNames(className, {
    'flex': display.mobile === 'flex',
    'block': display.mobile === 'block',
    'hidden': display.mobile === 'none',
    'lg:flex': display.desktop === 'flex',
    'lg:block': display.desktop === 'block',
    'lg:hidden': display.desktop === 'none',
  });

  return React.createElement(component, {
    className: classes
  }, children);
};

export default Box;
