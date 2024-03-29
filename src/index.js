import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons'
import App from './containers/app.js';
import './resources/css/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);