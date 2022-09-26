import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Responsive, Directions, SizeValues } from '../../types';
import { getWindowSizes } from '../../utils';

type Props = {
  children: React.ReactNode;
  direction: Responsive<Directions>;
  space: Responsive<SizeValues>;
  component?: 'span' | 'div' | 'article' | 'section';
  className?: string;
}

const Stack = ({ children, direction, component = 'div', space, className }: Props) => {
  const sizes = getWindowSizes();
  const [directionClass, setDirectionClass] = React.useState('');
  const [xSpacing, setXSpacing] = React.useState('');
  const [ySpacing, setYSpacing] = React.useState('');

  const directionClassHandler = (isMobile: boolean, isDesktop: boolean) => {
    if (direction.desktop === 'vertical' && isDesktop) {
      setDirectionClass('block');
    }

    if (direction.desktop === 'horizontal' && isDesktop) {
      setDirectionClass('flex');
    }

    if (direction.mobile === 'vertical' && isMobile) {
      setDirectionClass('block');
    }

    if (direction.mobile === 'horizontal' && isMobile) {
      setDirectionClass('flex');
    }
  }

  const getYSpacing = (isMobile: boolean, isDesktop: boolean) => {
    let classNames = '';

    if (direction.desktop === 'vertical' && isDesktop) {
      classNames += `space-y-${space.desktop}`;
    }

    if (direction.mobile === 'vertical' && isMobile) {
      classNames += `space-y-${space.mobile}`;
    }

    setYSpacing(classNames);
  };

  const getXSpacing = (isMobile: boolean, isDesktop: boolean) => {
    let classNames = '';

    if (direction.desktop === 'horizontal' && isDesktop) {
      classNames += `space-x-${space.desktop}`;
    }

    if (direction.mobile === 'horizontal' && isMobile) {
      classNames += `space-x-${space.mobile}`;
    }

    setXSpacing(classNames);
  }
  
  useEffect(() => {
    const handler = () => {
      const isMobile = window.innerWidth <= sizes.lg;
      const isDesktop = window.innerWidth > sizes.lg;
      
      directionClassHandler(isMobile, isDesktop);
      getYSpacing(isMobile, isDesktop);
      getXSpacing(isMobile, isDesktop);
    };

    handler();
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    }
  }, []);

  const stackClassName = classNames(directionClass, xSpacing, ySpacing, className);

  if (stackClassName.length > 0) { 
    return React.createElement(component, {
      className: stackClassName
    }, children);
  }

  return null;
};

export default Stack;
