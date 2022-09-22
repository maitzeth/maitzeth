import React from 'react';
import MenuBar from './MenuBar';
import Navbar from './Navbar';

type Props = {
  children: any,
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <MenuBar />
      <div className="p-10">
        {children}
      </div>
      <Navbar />
    </div>
  );
};

export default Layout