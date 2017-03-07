
import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './redux/reducers';
import App from './containers/App';
import './assets/css/index.css';

import './utils/util';

let store = createStore(reducers);

console.log(store.getState());
render(
    <Provider store={ store }>
        <App />
    </Provider>,
  document.getElementById('root')
);
