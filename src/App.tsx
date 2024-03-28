import Layout from './components/Layout';
import { openedWindow } from './jotai';
import { useAtom } from 'jotai';
import { WINDOWS } from './types';
import { FullHeight } from '@/components/UI';
import About from './components/Windows/About';
import Portfolio from './components/Windows/Portfolio';
import { Three } from './components/Windows/Three';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, useEffect } from 'react';
import { Three3DBall } from '@/components/3DBall';
import { motion, useAnimation } from 'framer-motion';
const animationVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const App = () => {
  const queryClient = new QueryClient();
  const [selectedWindow] = useAtom(openedWindow);
  const [displayInit, setDisplayInit] = useState(true);
  const [progress, setProgress] = useState(0);
  const controls = useAnimation(); // Animation controls

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        return prevProgress >= 100 ? 0 : prevProgress + 10
      });
    }, 600);

    if (progress === 100) {
      clearInterval(interval);
      setDisplayInit(false);
    }

    return () => clearInterval(interval);
  }, [progress]);

  const availableWindows = {
    [WINDOWS.About]: <About />,
    [WINDOWS.Portfolio]: <Portfolio />,
    [WINDOWS.Three]: <Three />,
  };

  if (displayInit) {
    return (
      <FullHeight component="main" className="bg-[#000] flex flex-col items-center justify-center space-y-10">
        <Three3DBall />
        <div className="w-[450px] rounded-md bg-gray-800">
          <div className="ease-in-out duration-300 h-1 rounded-md bg-white" style={{ width: `${progress}%` }}></div>
        </div>
      </FullHeight>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <motion.div
        initial="hidden"
        animate={displayInit ? "hidden" : "visible"}
        variants={animationVariant}
        transition={{ delay: 0.2 }}
        onAnimationComplete={() => controls.start("visible")}
        style={{ width: "100%" }}
      >
        <FullHeight
          component="main"
          className="bg-app min-h-screen bg-center bg-no-repeat bg-cover overflow-y-hidden"
        >
          <Layout>
            {selectedWindow && availableWindows[selectedWindow]}
          </Layout>
        </FullHeight>
      </motion.div>
    </QueryClientProvider>
  );
};

export default App;

