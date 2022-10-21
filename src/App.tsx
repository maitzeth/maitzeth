import Layout from './components/Layout';
import { openedWindow } from './jotai';
import { useAtom } from 'jotai';
import { WINDOWS } from './types';
import About from './components/Windows/About';
import Portfolio from './components/Windows/Portfolio';

const App = () => {
  const [selectedWindow] = useAtom(openedWindow);

  const availableWindows = {
    [WINDOWS.About]: <About />,
    [WINDOWS.Portfolio]: <Portfolio />
  };

  return (
    <main id="app" className="bg-app min-h-screen bg-center bg-no-repeat bg-cover overflow-y-hidden">
      <Layout>
        {selectedWindow && availableWindows[selectedWindow]}
      </Layout>
    </main>
  );
};

export default App;

