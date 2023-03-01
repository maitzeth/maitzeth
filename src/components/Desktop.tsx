import React from 'react';
import { openedWindow } from '../jotai';
import { useAtom } from 'jotai';
import { WINDOWS } from '../types';
import { FiTerminal, FiUser } from 'react-icons/fi';
import { Box } from './UI';
import Icon from './Icon';
import Widget from './Widget';
import Steam from './Widgets/Steam';

const Desktop = () => {
  const { 1: setWindow } = useAtom(openedWindow);

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
    }
  ];

  return (
    <Box display={{ mobile: 'block', desktop: 'flex' }} position={{ mobile: 'absolute' }} className="top-11 w-full">
      <Box component="section" paddingX={{ mobile: 'medium' }} display={{ mobile: 'flex' }} gap={{ mobile: 'large' }} className="flex-col flex-1">
        {icons.map((icon, index) => (
          <div key={`icon-${index}`} className="w-24 text-center">
            <Icon name={icon.window} onClick={handleOpenWindow} icon={icon.icon} label={icon.label} />
          </div>
        ))}
      </Box>
      <Box
        component="section"
        paddingX={{ mobile: 'medium' }}
        display={{ mobile: 'flex' }}
        gap={{ mobile: 'large' }}
        alignItems={{ mobile: 'start', desktop: 'right' }}
        className="flex-col flex-1"
        marginTop={{ mobile: 'large', desktop: 'none' }}
      >
        <Widget title="Steam Status">
          <Steam />
        </Widget>
      </Box>
    </Box>
  );
};

export default Desktop;
