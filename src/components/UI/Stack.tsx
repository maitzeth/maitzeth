import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Responsive, Directions, SizeValues } from '../../types';
import { getWindowSizes } from '../../utils';
import { useWindowSize } from 'react-use';

type Props = {
  children: React.ReactNode;
  direction: Responsive<Directions>;
  space?: Responsive<SizeValues>;
  component?: 'span' | 'div' | 'article' | 'section';
  className?: string;
}

const Stack = ({ children, direction, component = 'div', space, className }: Props) => {
  const sizes = getWindowSizes();
  const { width } = useWindowSize();

  const isDesktop = width >= sizes.lg;
  const isMobile = width < sizes.lg;

  const spaceDesktop = isDesktop && space?.desktop ? `stack__space--${space?.desktop}` : undefined;
  const spaceMobile = isMobile && space?.mobile ? `stack__space--${space?.mobile}` : undefined;

  const classes = classNames('stack', {
    'stack__horizontal': direction.desktop === 'horizontal' && isDesktop || direction.mobile === 'horizontal' && isMobile,
    'stack__vertical': direction.desktop === 'vertical' && isDesktop || direction.mobile === 'vertical' && isMobile,
  }, className, spaceDesktop, spaceMobile);

  return React.createElement(component, {
    className: classes
  }, children);
};

export default Stack;
