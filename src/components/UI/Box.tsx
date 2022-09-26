import React from 'react';
import classNames from 'classnames';
import { Responsive } from '../../types';

type Measures = 'small' | 'medium' | 'large';

type Props = {
  children: React.ReactNode;
  component?: 'span' | 'div' | 'article' | 'section';
  className?: string;
  display?: Responsive<'none' | 'block' | 'flex'>;
  padding?: Responsive<Measures>;
  paddingBottom?: Responsive<Measures>;
  paddingTop?: Responsive<Measures>;
  paddingLeft?: Responsive<Measures>;
  paddingRight?: Responsive<Measures>;
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
  paddingRight
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
  });

  return React.createElement(component, {
    className: classes
  }, children);
};

export default Box;
