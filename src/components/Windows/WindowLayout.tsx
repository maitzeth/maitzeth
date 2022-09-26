import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { FiX, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { openedWindow } from '../../jotai';
import { useAtom } from 'jotai';
import classNames from 'classnames';

type Props = {
  children: React.ReactElement;
  title: string;
};

const defaultPosition = { x: 150, y: 150 };

const WindowLayout = ({ children, title }: Props) => {
  const [isFullScreen, toggleFullScreen] = useState(false);
  const [, setWindow] = useAtom(openedWindow);
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
    return ReactDOM.createPortal(
      <Draggable
        bounds="body"
        handle=".handle"
        position={controlledPosition}
        scale={1}
        onStop={onControlledDragStop}
      >
        <div
          className={
            classNames('shadow-2xl', {
              'max-w-full h-window-full': isFullScreen,
              'max-w-4xl': !isFullScreen,
            })
          }
          onDoubleClick={handleFullScreen}
        >
          <header className="handle flex justify-between items-center bg-window-header px-3 py-2 rounded-t-lg cursor-pointer">
            <div className="flex items-center space-x-2">
              <div>
                <button type="button" className="bg-window-red w-4 h-4 rounded-full flex items-center justify-center hover:scale-110 transition-all" onClick={handleCloseWindow}>
                  <FiX color="#fff" size="14" />
                </button>
              </div>
              <div>
                <button type="button" className="bg-window-green w-4 h-4 rounded-full flex items-center justify-center hover:scale-110 transition-all" onClick={handleFullScreen}>
                  {isFullScreen ? <FiMinimize2 color="#fff" size="10" /> : <FiMaximize2 color="#fff" size="10" />}
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-sm text-white font-semibold">{title}</h2>
            </div>
          </header>
          <section className="bg-gray-100 p-4 rounded-b-lg h-full">
            {children}
          </section>
        </div>
      </Draggable>,
      rootElement,
    );
  }

  return null;
}

export default WindowLayout