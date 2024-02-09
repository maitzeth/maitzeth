import { useState, useEffect } from 'react';
import { format, addSeconds } from 'date-fns';


const DATE_FORMAT = 'EEE, dd LLL HH:mm:ss';

const MenuBar = () => {
  const [date, setDate] = useState(format(new Date(), DATE_FORMAT));

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(format(addSeconds(new Date(), 1), DATE_FORMAT));
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="flex w-full px-2 h-navbar items-center justify-center bg-navbar">
      <section>
        <p className="text-sm text-white">
          {date}
        </p>
      </section>
    </nav>
  );
};

export default MenuBar;
