import React from 'react';
import reportWebVitals from './reportWebVitals'

import { configureStore } from '@reduxjs/toolkit';
import {createRoot} from 'react-dom/client';

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = configureStore({reducer:{rootReducer}});
document.title = 'Front'
root.render(
  <Provider store={store}>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
  </Provider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
