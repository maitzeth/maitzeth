import React from 'react';
import classNames from 'classnames';

interface Responsive<T> {
  mobile?: T,
  desktop?: T
};

type Directions = 'vertical' | 'horizontal';

type Props = {
  children: React.ReactNode;
  direction?: Responsive<Directions>;
  component?: 'span' | 'div' | 'article' | 'section';
}

const Stack = ({ children, direction, component = 'div' }: Props) => {
  console.log(direction);

  return React.createElement(component, {
    className: ''
  }, children);
};

export default Stack;
