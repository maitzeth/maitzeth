import React from 'react';
import { Components, Responsive, Sizes } from '../../types';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  component?: Components;
  size: Responsive<Sizes>;
  className?: string;
};

const Container = ({ component = 'div', children, size, className }: Props) => {
  const classes = classNames('mx-auto', {
    'lg:max-w-7xl': size.desktop === 'large',
    'max-w-7xl': size.mobile === 'large',

    'lg:max-w-3xl': size.desktop === 'medium',
    'max-w-3xl': size.mobile === 'medium',

    'lg:max-w-lg': size.desktop === 'small',
    'max-w-lg': size.mobile === 'small',

    'lg:max-w-full': size.desktop === 'full',
    'max-w-full': size.mobile === 'full',
  }, className);

  return React.createElement(component, {
    className: classes
  }, children);
};

export default Container;