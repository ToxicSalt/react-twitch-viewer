import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App/App';
import store from './stores/index'

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
   document.getElementById('app')
 );
