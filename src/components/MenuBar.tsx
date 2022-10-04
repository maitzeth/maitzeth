import React from 'react';
import { format } from 'date-fns';

const date = format(new Date(), 'EEE, LLL dd p');

const MenuBar = () => {
  return (
    <nav className="absolute flex w-full bg-transparent px-2 py-2 justify-center">
      <section>
        <p className="text-sm text-white">
          {date}
        </p>
      </section>
    </nav>
  );
};

export default MenuBar;
