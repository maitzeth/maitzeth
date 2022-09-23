import React from 'react';
import { WINDOWS } from '../types'

type Props = {
  icon: React.ReactElement;
  name: WINDOWS;
  onClick?: (name: WINDOWS) => void;
  label: string;
};

const Icon = ({ icon, onClick, name, label }: Props) => {
  const extendedIcon = React.cloneElement(icon, {
    color: 'black',
    size: '30',
    className: 'drop-shadow-xl'
  }, null);

  const handleClick = () => {
    onClick?.(name);
  };

  return (
    <div className="flex flex-col">
      <div className="flex-none mb-2">
        <button type="button" className="bg-white rounded-md p-2 drop-shadow-lg shadow-inner hover:scale-105 transition-all" onClick={handleClick}>
          {extendedIcon}
        </button>
      </div>
      <small className="text-white font-bold">{label}</small>
    </div>
  );
};

export default React.memo(Icon);
