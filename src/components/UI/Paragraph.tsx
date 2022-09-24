import React from 'react';

type Props = {
  children: React.ReactNode;
}

const Paragraph = ({ children }: Props) => {
  return <p className="text-gray-700 text-base">{children}</p>;
};

export default Paragraph;
