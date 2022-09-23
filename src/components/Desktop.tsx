import React from 'react';
import { openedWindow } from '../jotai';
import { useAtom } from 'jotai';
import { WINDOWS } from '../types';
import { FiTerminal, FiUser } from 'react-icons/fi';
import Icon from './Icon';

const Desktop = () => {
  const [, setWindow] = useAtom(openedWindow);

  const handleOpenWindow = (windowToOpen: WINDOWS) => {
    setWindow(windowToOpen);
  };

  return (
    <div className="w-desktop absolute top-11">
      <div className="grid grid-cols-8 text-center">
        <div>
          <Icon name={WINDOWS.About} onClick={handleOpenWindow} icon={<FiUser />} label="About me" />
        </div>
        <div>
          <Icon name={WINDOWS.Portfolio} onClick={handleOpenWindow} icon={<FiTerminal />} label="Portfolio" />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
