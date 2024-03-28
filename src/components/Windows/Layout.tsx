import { useState, PropsWithChildren } from 'react';
import { createPortal } from "react-dom";
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { FiX, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { openedWindow } from '@/jotai';
import { useAtom } from 'jotai';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from '@/utils';
import { WINDOW_HEIGHT_SIZE } from '@/utils/constants';
import { PropsWithClassName } from '@/types';

type Props = PropsWithClassName<PropsWithChildren<{
  title: string;
  centeredContent?: boolean;
}>>;

const defaultPosition = { x: 100, y: 100 };

export const WindowLayout = ({ children, title, centeredContent = false, className = 'p-4' }: Props) => {
  const [isFullScreen, toggleFullScreen] = useState(false);
  const { 1: setWindow } = useAtom(openedWindow);
  const [controlledPosition, setControlledPosition] = useState(defaultPosition);

  const handleCloseWindow = () => {
    setWindow(null);
  };

  const onControlledDragStop = (_e: DraggableEvent, position: DraggableData) => {
    const { x, y } = position;
    setControlledPosition({ x, y });
  };

  const handleFullScreen = () => {
    toggleFullScreen(prevFullScreen => {
      setControlledPosition(prevPosition => {
        return {
          ...prevPosition,
          x: prevFullScreen ? defaultPosition.x : 0,
          y: prevFullScreen ? defaultPosition.y : 0,
        };
      });

      return !prevFullScreen;
    });
  };

  const rootElement = document.getElementById('app');

  if (rootElement) {
    return createPortal(
      <AnimatePresence>
        <div className="bg-black-light bg-opacity-25 absolute h-screen w-full">
          <motion.div {...{
              key: "box",
              initial: {
                y: "15%",
                opacity: 0,
                scale: 0.8,
              },
              animate: {
                y: 0,
                opacity: 1,
                scale: 1,
              },
              transition: {
                duration: 0.15,
                type: "backInOut",
              },
            }}>
            <Draggable
              bounds="body"
              handle=".handle"
              position={controlledPosition}
              scale={1}
              onStop={onControlledDragStop}
            >
              <motion.div
                animate={isFullScreen ? "open" : "closed"}
                variants={{
                  closed: { maxWidth: '56rem', height: '400px' },
                  open: { maxWidth: '100%', height: WINDOW_HEIGHT_SIZE },
                }}
                initial={false}
                className="shadow-2xl max-w-4xl"
              >
                <header className="handle flex justify-between items-center bg-window-header px-3 py-2 rounded-t-lg cursor-pointer border-x border-window-header" onDoubleClick={handleFullScreen}>
                  <div className="flex items-center space-x-2">
                    <div>
                      <button type="button" className="window-button bg-window-red" onClick={handleCloseWindow}>
                        <FiX color="#fff" size="14" />
                      </button>
                    </div>
                    <div>
                      <button type="button" className="window-button bg-window-green" onClick={handleFullScreen}>
                        {isFullScreen ? <FiMinimize2 color="#fff" size="10" /> : <FiMaximize2 color="#fff" size="10" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-sm text-white font-semibold">{title}</h2>
                  </div>
                </header>
                <section
                  className={cn('bg-gray-100 h-full overflow-auto border-b border-r border-l border-window-header', className, {
                    'flex items-center justify-center': centeredContent
                  })}
                >
                  {children}
                </section>
              </motion.div>
            </Draggable>
          </motion.div>
        </div>
      </AnimatePresence>,
      rootElement,
    );
  }

  return null;
}