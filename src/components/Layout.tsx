import React from 'react';
import MenuBar from './MenuBar';
import Desktop from './Desktop';

type Props = {
  children: React.ReactNode,
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <MenuBar />
      {children}
      <Desktop />
    </div>
  );
};

export default Layout