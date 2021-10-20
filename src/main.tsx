import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProviders } from './contexts';
import { Home } from './pages/Home';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <ContextProviders>
      <Home />
    </ContextProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
