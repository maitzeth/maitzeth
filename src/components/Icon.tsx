import React, { Fragment } from 'react';
import { WINDOWS, ValuesOf } from '@/types';
import { useHover } from 'react-use';
import { motion } from "framer-motion"
import { cn } from '@/utils';


type Props = {
  icon: React.ReactElement;
  name: ValuesOf<typeof WINDOWS>;
  onClick: (name: ValuesOf<typeof WINDOWS>) => void;
  label: string;
};

const Icon = ({ icon, onClick, name, label }: Props) => {
  const extendedIcon = React.cloneElement(icon, {
    color: 'black',
    size: '30',
    className: 'drop-shadow-xl'
  }, null);

  const handleClick = () => {
    onClick(name);
  };

  const element = (hovered: boolean) => {
    return (
      <button
        type="button"
        className={cn('flex flex-col gap-2 icon transition-all' , {
          'scale-[1.08]': hovered
        })}
        onClick={handleClick}
        title={label}
      >
        <div className="bg-white rounded-md p-2 drop-shadow-lg shadow-inner transition-all">
          {extendedIcon}
        </div>
      </button>
    );
  };

  const [hoverable, hovered] = useHover(element);
  return (
    <div className="relative">
      {hoverable}
      <motion.nav
        animate={hovered ? "open" : "closed"}
        className="absolute -top-[5px] left-full"
        variants={{
          open: { opacity: 1, visibility: 'visible', x: 0 },
          closed: { opacity: 0, visibility: 'hidden', x: 20 },
        }}
      >
        <div className="absolute  ml-1">
          <p className="text-white bg-white bg-opacity-15 rounded-md px-2 py-1">{label}</p>
        </div>
      </motion.nav>
    </div>
  );
};

export default React.memo(Icon);
