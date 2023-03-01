import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'sonner'
import 'virtual:fonts.css';
import './index.scss';

// <React.StrictMode>
// </React.StrictMode>

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
    <Toaster richColors  />
    <App />
  </React.Fragment>
);
