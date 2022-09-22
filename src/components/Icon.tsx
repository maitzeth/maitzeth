import React from 'react';
import { WINDOWS } from '../types'

type Props = {
  icon: React.ReactElement;
  name: WINDOWS;
  onClick?: (name: WINDOWS) => void;
};

const Icon = ({ icon, onClick, name }: Props) => {
  const extendedIcon = React.cloneElement(icon, {
    color: 'black',
    size: '30',
    className: 'drop-shadow-xl'
  }, null);

  const handleClick = () => {
    onClick?.(name);
  };

  return (
    <button type="button" className="bg-white rounded-md p-2 drop-shadow-lg shadow-inner hover:scale-105 transition-all" onClick={handleClick}>
      {extendedIcon}
    </button>
  );
};

export default React.memo(Icon);
