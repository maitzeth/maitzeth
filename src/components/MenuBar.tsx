import React from 'react';
import { format } from 'date-fns';

const date = format(new Date(), 'EEE, LLL dd p');

const MenuBar = () => {
  return (
    <nav className="flex w-full px-2 h-navbar items-center justify-center bg-navbar">
      <section>
        <p className="text-sm text-white">
          {date}
        </p>
      </section>
    </nav>
  );
};

export default MenuBar;
