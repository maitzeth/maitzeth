import React from 'react';
import { openedWindow } from '../jotai';
import { useAtom } from 'jotai';
import { WINDOWS } from '../types';
import { FiTerminal, FiUser, FiPackage } from 'react-icons/fi';
import { FaSteam } from 'react-icons/fa';
import Icon from './Icon';

const Desktop = () => {
  const [, setWindow] = useAtom(openedWindow);

  const handleOpenWindow = (windowToOpen: WINDOWS) => {
    setWindow(windowToOpen);
  };

  const icons = [
    {
      icon: <FiUser />,
      window: WINDOWS.About,
      label: "About me"
    },
    {
      icon: <FiTerminal />,
      window: WINDOWS.Portfolio,
      label: "Work Experience"
    },
    {
      icon: <FiPackage />,
      window: WINDOWS.WorkedTechs,
      label: "Used Technologies"
    },
    {
      icon: <FaSteam />,
      window: WINDOWS.Gaming,
      label: "Gaming Status"
    },
  ];

  return (
    <div className="w-desktop absolute top-11">
      <div className="px-4 flex flex-col gap-6">
        {icons.map((icon, index) => (
          <div key={`icon-${index}`} className="w-24 text-center">
            <Icon name={icon.window} onClick={handleOpenWindow} icon={icon.icon} label={icon.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desktop;
