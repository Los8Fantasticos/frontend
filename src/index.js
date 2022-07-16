import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Login from './pages/SignUpForm';

ReactDOM.render(
  <React.StrictMode>
    <Login>
      <App />
    </Login>
  </React.StrictMode>,
  document.getElementById('root'),
);
