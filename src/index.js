import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import 'antd/dist/antd.css';

const container = document.getElementById('app');

const root = createRoot(container);
root.render(
  <Router>
    <App />
  </Router>
);

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );
