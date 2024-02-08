import { PropsWithChildren } from 'react';
import MenuBar from './MenuBar';
import { use100vh } from 'react-div-100vh';
import { TW_CONFIG } from '@/utils/constants';

import React from 'react';
import { openedWindow } from '../jotai';
import { useAtom } from 'jotai';
import { KeysOf, WINDOWS } from '@/types';
import { FiTerminal, FiUser } from 'react-icons/fi';
import { Box } from './UI';
import Icon from './Icon';
import Widget from './Widget';
import Steam from './Widgets/Steam';

// import Desktop from './Desktop';

type Props = PropsWithChildren;

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

const Layout = ({ children }: Props) => {
  const height = use100vh();

  const { 1: setWindow } = useAtom(openedWindow);

  const handleOpenWindow = (windowToOpen: KeysOf<typeof WINDOWS>) => () => {
    console.log('zzz');
    // console.log(windowToOpen, 'zxczx');
    // setWindow(windowToOpen);
  };

  // Parse from string to number
  // Example '10px' to 10
  const navbarHeight = Number(TW_CONFIG.extend.height.navbar.split('px')[0]);

  return (
    <>
      <MenuBar />
      <section style={{
        height: height ? height - navbarHeight : '100vh',
      }}>
        <aside className="w-[5rem] h-full py-5 bg-navbar bg-opacity-85">
          <Box component="section" paddingX={{ mobile: 'medium' }} display={{ mobile: 'flex' }} gap={{ mobile: 'large' }} className="flex-col flex-1">
            {icons.map((icon, index) => (
              <div key={`icon-${index}`}>
                <Icon
                  name={icon.window}
                  onClick={(name) => {
                    console.log(name);
                  }}
                  icon={icon.icon}
                  label={icon.label}
                />
              </div>
            ))}
          </Box>
        </aside>
        {children}
      </section>
      {/* <Desktop /> */}
    </>
  );
};

export default Layout