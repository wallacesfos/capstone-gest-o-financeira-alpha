import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Providers from './Providers';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <Providers>
    <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </BrowserRouter>
  </Providers>,
  document.getElementById('root')
);
