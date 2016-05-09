import React from 'react';
<<<<<<< HEAD
import App from './Components/app.jsx';
import { render } from 'react-dom';
=======
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import styles from './styles/entry.scss';
>>>>>>> 4c6ef532b9f702406144fdbae107fda90dfd897c

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
