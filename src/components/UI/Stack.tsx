import { createElement, PropsWithChildren, HTMLAttributes } from 'react';
import { getWindowSizes, cn } from '@/utils';
import { Responsive, Directions, SizeValues, Components, PropsWithClassName } from '@/types';
import { useWindowSize } from 'react-use';

type Props = HTMLAttributes<HTMLDivElement> & PropsWithClassName<PropsWithChildren<{
  direction: Responsive<Directions>;
  space?: Responsive<SizeValues>;
  component?: Exclude<Components, "span">;
}>>;

const Stack = ({ children, direction, component = 'div', space, className }: Props) => {
  const sizes = getWindowSizes();
  const { width } = useWindowSize();

  const isDesktop = width >= sizes.lg;
  const isMobile = width < sizes.lg;

  const spaceDesktop = isDesktop && space?.desktop ? `stack__space--${space?.desktop}` : undefined;
  const spaceMobile = isMobile && space?.mobile ? `stack__space--${space?.mobile}` : undefined;

  if (!("mobile" in direction)) {
    throw new Error('Mobile Direction responsive key is missing');
  }

  if (!("desktop" in direction)) {
    throw new Error('Desktop Direction responsive key is missing');
  }

  if (space && !("mobile" in space)) {
    throw new Error('Mobile Space responsive key is missing');
  }

  if (space && !("desktop" in space)) {
    throw new Error('Desktop Space responsive key is missing');
  }

  const directionClass = cn('stack', {
    'stack__horizontal': direction.desktop === 'horizontal' && isDesktop || direction.mobile === 'horizontal' && isMobile,
    'stack__vertical': direction.desktop === 'vertical' && isDesktop || direction.mobile === 'vertical' && isMobile,
  }, className, spaceDesktop, spaceMobile);

  return createElement(component, {
    className: directionClass
  }, children);
};

export default Stack;
