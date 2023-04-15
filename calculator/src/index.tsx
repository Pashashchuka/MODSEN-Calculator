import React from 'react';
import ReactDOM from 'react-dom/client';

import './i18next';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
