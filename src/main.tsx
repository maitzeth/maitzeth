import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'sonner'
import 'virtual:fonts.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Fragment>
      <Toaster richColors  />
      <App />
    </React.Fragment>
  </React.StrictMode>
);
