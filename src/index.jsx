import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import moviesApp from './reducers/reducers';
import App from './components/App';

import './index.scss';

// Finds the root of your app
//const container = document.getElementsByClassName('app-container')[0];

const store = createStore(moviesApp, devToolsEnhancer());

// Tells React to render your app in the root DOM element app-container
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementsByClassName('app-container')[0]
);