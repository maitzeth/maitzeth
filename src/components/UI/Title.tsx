import React from 'react';

type Props = {
  children: React.ReactNode;
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title = ({ children, component }: Props) => {
  return React.createElement(
    component,
    { className: 'text-gray-800 text-3xl font-bold' },
    children
  );
};

export default Title;
