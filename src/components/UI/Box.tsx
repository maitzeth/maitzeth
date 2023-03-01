import React from 'react';
import classNames from 'classnames';
import { Responsive } from '../../types';

type Measures<T = unknown> = 'small' | 'medium' | 'large' | T;
type AlignDirection = 'start' | 'center' | 'right'
type JustifyDirection = 'start' | 'center' | 'end' | 'between';
type Positions = 'absolute' | 'relative' | 'fixed';

type Props = {
  children: React.ReactNode;
  component?: 'span' | 'div' | 'article' | 'section' | 'li' | 'ul' | 'ol';
  className?: string;
  display?: Responsive<'none' | 'block' | 'flex'>;
  padding?: Responsive<Measures>;
  paddingBottom?: Responsive<Measures>;
  paddingTop?: Responsive<Measures>;
  paddingLeft?: Responsive<Measures>;
  paddingRight?: Responsive<Measures>;
  overflow?: Responsive<'hidden' | 'auto' | 'scroll'>;
  borderRadius?: Responsive<Measures>;
  flexShrink?: Responsive<1 | 0>;
  flex?: Responsive<1 | 'none'>;
  marginTop?: Responsive<Measures<'none'>>;
  alignItems?: Responsive<AlignDirection>;
  justifyContent?: Responsive<JustifyDirection>;
  gap?: Responsive<Measures>;
  position?: Responsive<Positions>;
  paddingX?: Responsive<Measures>;
  paddingY?: Responsive<Measures>;
  [key: string]: any;
}

const Box = ({
  component = 'div',
  children,
  className,
  display,
  padding,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  overflow,
  borderRadius,
  flexShrink,
  marginTop,
  alignItems,
  justifyContent,
  gap,
  position,
  paddingX,
  paddingY,
  flex,
  ...props
}: Props) => {
  const classes = classNames(className, {
    'flex': display?.mobile === 'flex',
    'block': display?.mobile === 'block',
    'hidden': display?.mobile === 'none',
    'lg:flex': display?.desktop === 'flex',
    'lg:block': display?.desktop === 'block',
    'lg:hidden': display?.desktop === 'none',

    'p-2': padding?.mobile === 'small',
    'lg:p-2': padding?.desktop === 'small',

    'p-4': padding?.mobile === 'medium',
    'lg:p-4': padding?.desktop === 'medium',

    'p-6': padding?.mobile === 'large',
    'lg:p-6': padding?.desktop === 'large',

    'pb-2': paddingBottom?.mobile === 'small',
    'lg:pb-2': paddingBottom?.desktop === 'small',

    'pb-4': paddingBottom?.mobile === 'medium',
    'lg:pb-4': paddingBottom?.desktop === 'medium',

    'pb-6': paddingBottom?.mobile === 'large',
    'lg:pb-6': paddingBottom?.desktop === 'large',

    'pt-2': paddingTop?.mobile === 'small',
    'lg:pt-2': paddingTop?.desktop === 'small',

    'pt-4': paddingTop?.mobile === 'medium',
    'lg:pt-4': paddingTop?.desktop === 'medium',

    'pt-6': paddingTop?.mobile === 'large',
    'lg:pt-6': paddingTop?.desktop === 'large',

    'pl-2': paddingLeft?.mobile === 'small',
    'lg:pl-2': paddingLeft?.desktop === 'small',

    'pl-4': paddingLeft?.mobile === 'medium',
    'lg:pl-4': paddingLeft?.desktop === 'medium',

    'pl-6': paddingLeft?.mobile === 'large',
    'lg:pl-6': paddingLeft?.desktop === 'large',

    'pr-2': paddingRight?.mobile === 'small',
    'lg:pr-2': paddingRight?.desktop === 'small',

    'pr-4': paddingRight?.mobile === 'medium',
    'lg:pr-4': paddingRight?.desktop === 'medium',

    'pr-6': paddingRight?.mobile === 'large',
    'lg:pr-6': paddingRight?.desktop === 'large',

    'overflow-hidden': overflow?.mobile === 'hidden',
    'overflow-auto': overflow?.mobile === 'auto',
    'overflow-scroll': overflow?.mobile === 'scroll',

    'lg:overflow-hidden': overflow?.desktop === 'hidden',
    'lg:overflow-auto': overflow?.desktop === 'auto',
    'lg:overflow-scroll': overflow?.desktop === 'scroll',

    'rounded-sm': borderRadius?.mobile === 'small',
    'rounded-md': borderRadius?.mobile === 'medium',
    'rounded-lg': borderRadius?.mobile === 'large',

    'lg:rounded-sm': borderRadius?.desktop === 'small',
    'lg:rounded-md': borderRadius?.desktop === 'medium',
    'lg:rounded-lg': borderRadius?.desktop === 'large',

    'flex-shrink-0': flexShrink?.mobile === 0,
    'flex-shrink-1': flexShrink?.mobile === 1,

    'lg:flex-shrink-0': flexShrink?.desktop === 0,
    'lg:flex-shrink-1': flexShrink?.desktop === 1,

    'mt-0': marginTop?.mobile === 'none',
    'mt-2': marginTop?.mobile === 'small',
    'mt-4': marginTop?.mobile === 'medium',
    'mt-6': marginTop?.mobile === 'large',

    'lg:mt-0': marginTop?.desktop === 'none',
    'lg:mt-2': marginTop?.desktop === 'small',
    'lg:mt-4': marginTop?.desktop === 'medium',
    'lg:mt-6': marginTop?.desktop === 'large',

    'items-start': alignItems?.mobile === 'start',
    'items-center': alignItems?.mobile === 'center',
    'items-end': alignItems?.mobile === 'right',

    'lg:items-start': alignItems?.desktop === 'start',
    'lg:items-center': alignItems?.desktop === 'center',
    'lg:items-end': alignItems?.desktop === 'right',

    'justify-start': justifyContent?.mobile === 'start',
    'justify-center': justifyContent?.mobile === 'center',
    'justify-end': justifyContent?.mobile === 'end',
    'justify-between': justifyContent?.mobile === 'between',

    'lg:justify-start': justifyContent?.desktop === 'start',
    'lg:justify-center': justifyContent?.desktop === 'center',
    'lg:justify-end': justifyContent?.desktop === 'end',
    'lg:justify-between': justifyContent?.desktop === 'between',

    'gap-2': gap?.mobile === 'small',
    'gap-4': gap?.mobile === 'medium',
    'gap-6': gap?.mobile === 'large',

    'lg:gap-2': gap?.desktop === 'small',
    'lg:gap-4': gap?.desktop === 'medium',
    'lg:gap-6': gap?.desktop === 'large',

    'absolute': position?.mobile === 'absolute',
    'relative': position?.mobile === 'relative',
    'fixed': position?.mobile === 'fixed',

    'lg:absolute': position?.desktop === 'absolute',
    'lg:relative': position?.desktop === 'relative',
    'lg:fixed': position?.desktop === 'fixed',

    'px-2': paddingX?.mobile === 'small',
    'px-4': paddingX?.mobile === 'medium',
    'px-6': paddingX?.mobile === 'large',

    'lg:px-2': paddingX?.desktop === 'small',
    'lg:px-4': paddingX?.desktop === 'medium',
    'lg:px-6': paddingX?.desktop === 'large',

    'py-2': paddingY?.mobile === 'small',
    'py-4': paddingY?.mobile === 'medium',
    'py-6': paddingY?.mobile === 'large',

    'lg:py-2': paddingY?.desktop === 'small',
    'lg:py-4': paddingY?.desktop === 'medium',
    'lg:py-6': paddingY?.desktop === 'large',

    'flex-1': flex?.mobile === 1,
    'flex-none': flex?.mobile === 'none',
    'lg:flex-1': flex?.desktop === 1,
    'lg:flex-none': flex?.desktop === 'none',
  });

  return React.createElement(component, {
    className: classes,
    ...props
  }, children);
};

export default Box;
