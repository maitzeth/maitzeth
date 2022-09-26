import React from 'react';
import classNames from 'classnames';

interface Responsive<T> {
  mobile?: T,
  desktop?: T
};

type Directions = 'vertical' | 'horizontal';
type SpaceNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type Props = {
  children: React.ReactNode;
  direction: Responsive<Directions>;
  space: Responsive<SpaceNumbers>
  component?: 'span' | 'div' | 'article' | 'section';
}

const Stack = ({ children, direction, component = 'div', space }: Props) => {
  const stackClassName = classNames({
    'lg:flex': direction?.desktop === 'horizontal',
    'lg:block': direction?.desktop === 'vertical',
    'flex': direction?.mobile === 'horizontal',
    'block': direction?.mobile === 'vertical',

    'lg:space-y-px': direction.desktop === 'vertical' && space.desktop === 1,
    'lg:space-y-2': direction.desktop === 'vertical' && space.desktop === 2,
    'lg:space-y-3': direction.desktop === 'vertical' && space.desktop === 3,
    'lg:space-y-4': direction.desktop === 'vertical' && space.desktop === 4,
    'lg:space-y-5': direction.desktop === 'vertical' && space.desktop === 5,
    'lg:space-y-6': direction.desktop === 'vertical' && space.desktop === 6,
    'lg:space-y-7': direction.desktop === 'vertical' && space.desktop === 7,
    'lg:space-y-8': direction.desktop === 'vertical' && space.desktop === 8,
    'lg:space-y-9': direction.desktop === 'vertical' && space.desktop === 9,
    'lg:space-y-10': direction.desktop === 'vertical' && space.desktop === 10,

    'space-y-px': direction.mobile === 'vertical' && space.mobile === 1,
    'space-y-2': direction.mobile === 'vertical' && space.mobile === 2,
    'space-y-3': direction.mobile === 'vertical' && space.mobile === 3,
    'space-y-4': direction.mobile === 'vertical' && space.mobile === 4,
    'space-y-5': direction.mobile === 'vertical' && space.mobile === 5,
    'space-y-6': direction.mobile === 'vertical' && space.mobile === 6,
    'space-y-7': direction.mobile === 'vertical' && space.mobile === 7,
    'space-y-8': direction.mobile === 'vertical' && space.mobile === 8,
    'space-y-9': direction.mobile === 'vertical' && space.mobile === 9,
    'space-y-10': direction.mobile === 'vertical' && space.mobile === 10,

    'lg:space-x-px': direction.desktop === 'horizontal' && space.desktop === 1,
    'lg:space-x-2': direction.desktop === 'horizontal' && space.desktop === 2,
    'lg:space-x-3': direction.desktop === 'horizontal' && space.desktop === 3,
    'lg:space-x-4': direction.desktop === 'horizontal' && space.desktop === 4,
    'lg:space-x-5': direction.desktop === 'horizontal' && space.desktop === 5,
    'lg:space-x-6': direction.desktop === 'horizontal' && space.desktop === 6,
    'lg:space-x-7': direction.desktop === 'horizontal' && space.desktop === 7,
    'lg:space-x-8': direction.desktop === 'horizontal' && space.desktop === 8,
    'lg:space-x-9': direction.desktop === 'horizontal' && space.desktop === 9,
    'lg:space-x-10': direction.desktop === 'horizontal' && space.desktop === 10,

    'space-x-px': direction.mobile === 'horizontal' && space.mobile === 1,
    'space-x-2': direction.mobile === 'horizontal' && space.mobile === 2,
    'space-x-3': direction.mobile === 'horizontal' && space.mobile === 3,
    'space-x-4': direction.mobile === 'horizontal' && space.mobile === 4,
    'space-x-5': direction.mobile === 'horizontal' && space.mobile === 5,
    'space-x-6': direction.mobile === 'horizontal' && space.mobile === 6,
    'space-x-7': direction.mobile === 'horizontal' && space.mobile === 7,
    'space-x-8': direction.mobile === 'horizontal' && space.mobile === 8,
    'space-x-9': direction.mobile === 'horizontal' && space.mobile === 9,
    'space-x-10': direction.mobile === 'horizontal' && space.mobile === 10,
  });

  return React.createElement(component, {
    className: stackClassName
  }, children);
};

export default Stack;
