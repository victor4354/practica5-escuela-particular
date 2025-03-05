import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Obtén el elemento root que se encuentra en public/index.html
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

