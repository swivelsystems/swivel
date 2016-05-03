import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import styles from './styles/entry.scss';
import actions from './actions/index.js';
import axios from 'axios';
const store = configureStore();

const loadData = (id) => {
  const url = 'http://localhost:8080/test/' + id;
  return axios({
    url: url,
    timeout: 20000,
    method: 'get',
    // responseType: 'json',
    data: id,
  })
    .then((response) => {
      store.dispatch(actions.getCourses(response.data));
    })
    .catch((error) => {
      store.dispatch(actions.getCoursesError(error));
    });
};

// load data with teacher id, made it up but right now can change once we have auth
loadData(3);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
