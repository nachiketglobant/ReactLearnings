import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadTasks} from './actions/taskActions';
import {loadCategories} from './actions/categoryActions';
import '../node_modules/toastr/build/toastr.min.css';
  
const store = configureStore();

store.dispatch(loadTasks());
store.dispatch(loadCategories());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);