import Layout from './components/Layout';
import Draggable from 'react-draggable';
import { openedWindow } from './jotai';
import { useAtom } from 'jotai';
import { WINDOWS } from './types';

const App = () => {
  const [selectedWindow] = useAtom(openedWindow);

  const handleStart = (what: any) => {
    console.log('Event: ', what);
  };

  const handleStop = (what: any) => {
    console.log({ what });
  };

  const availableWindows = {
    [WINDOWS.About]: (
      <div>
        <div className="handle">Drag from here</div>
        <div>This readme is really dragging on...</div>
      </div>
    ),
    [WINDOWS.Portfolio]: (
      <div>
        <div className="handle">Drag from here</div>
        <div>Portfolio</div>
      </div>
    ),
  };

  return (
    <div className="bg-app min-h-screen bg-center bg-no-repeat bg-cover overflow-y-hidden">
      <Layout>
        {selectedWindow && (
          <Draggable
            handle=".handle"
            defaultPosition={{x: 100, y: 100}}
            grid={[25, 25]}
            scale={1}
            onStart={handleStart}
            onStop={handleStop}
          >
            {availableWindows[selectedWindow]}
          </Draggable>
        )}
      </Layout>
    </div>
  );
};

export default App;

