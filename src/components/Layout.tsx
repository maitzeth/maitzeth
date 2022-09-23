import React from 'react';
import MenuBar from './MenuBar';

type Props = {
  children: React.ReactNode,
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <MenuBar />
      {children}
    </div>
  );
};

export default Layout