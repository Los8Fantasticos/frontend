import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import SignUpForm from './pages/SignUpForm';

ReactDOM.render(
  <React.StrictMode>
    <SignUpForm>
      <App />
    </SignUpForm>
  </React.StrictMode>,
  document.getElementById('root'),
);
