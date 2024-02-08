import Layout from './components/Layout';
import { openedWindow } from './jotai';
import { useAtom } from 'jotai';
import { WINDOWS } from './types';
import { FullHeight } from '@/components/UI';
import About from './components/Windows/About';
import Portfolio from './components/Windows/Portfolio';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const queryClient = new QueryClient();
  const [selectedWindow] = useAtom(openedWindow);

  const availableWindows = {
    [WINDOWS.About]: <About />,
    [WINDOWS.Portfolio]: <Portfolio />
  };

  return (
    <QueryClientProvider client={queryClient}>
      <FullHeight component="main" className="bg-app min-h-screen bg-center bg-no-repeat bg-cover overflow-y-hidden">
        <Layout>
          {selectedWindow && availableWindows[selectedWindow]}
        </Layout>
      </FullHeight>
    </QueryClientProvider>
  );
};

export default App;

