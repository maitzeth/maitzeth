import React from 'react';
import Icon from './Icon';
import { FiTerminal, FiUser } from 'react-icons/fi'
import { useAtom } from 'jotai';
import { openedWindow } from '../jotai';
import { WINDOWS } from '../types';

const Navbar = () => {
  const [_window, setWindow] = useAtom(openedWindow);

  const handleOpenWindow = (windowToOpen: WINDOWS) => {
    setWindow(windowToOpen);
  };

  return (
    <div className="absolute bottom-0 left-2/4 h-8 w-auto px-4 bg-navbar shadow-2xl rounded-t-lg -translate-x-2/4 border border-gray-700 border-b-0 translate-y-full hover:translate-y-0 transition-all">
      <div className="flex gap-4 items-center -translate-y-2/4">
        <Icon name={WINDOWS.About} onClick={handleOpenWindow} icon={<FiUser />} />
        <Icon name={WINDOWS.Portfolio} onClick={handleOpenWindow} icon={<FiTerminal />} />
      </div>
    </div>
  );
};

export default Navbar;
