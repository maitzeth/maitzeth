import React from 'react';
import { FiSearch } from "react-icons/fi";
import { format } from 'date-fns';

const date = format(new Date(), 'EEE, LLL dd p');

const MenuBar = () => {
  const appsMenuHandler = () => {
    console.log('Apps menu handler');
  };

  return (
    <nav className="absolute flex w-full bg-transparent px-2 py-2 justify-between">
      <section>
        <button type="button" className="flex gap-2 items-center" onClick={appsMenuHandler}>
          <FiSearch color="#fff" />
          <p className="text-sm text-white">
            Applications
          </p>
        </button>
      </section>
      <section>
        <p className="text-sm text-white">
          {date}
        </p>
      </section>
    </nav>
  );
};

export default MenuBar;
