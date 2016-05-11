import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import App from './components/App.jsx';
import Landing from './components/Landing.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import styles from './styles/entry.scss';
import actions from './actions/index.js';
import axios from 'axios';
const store = configureStore();

const loadData = (id) => {
  const url = `http://localhost:8080/api/teachers/${id}`;
  return axios({
    url,
    timeout: 20000,
    method: 'get',
    // responseType: 'json',
    data: id,
  })
  .then((response) => {
    console.log('response', response);
    store.dispatch(actions.receiveCourses(response.data.courses));
  })
  .catch((error) => {
    store.dispatch(actions.receiveCoursesError(error));
  });
};

// load data with teacher id, made it up but right now can change once we have auth
loadData(2);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Landing} />
      <Route path="/demo" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
