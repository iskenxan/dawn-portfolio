import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const  store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,container );
registerServiceWorker();
