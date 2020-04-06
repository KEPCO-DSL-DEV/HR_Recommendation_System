import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import SpinnerStore from 'stores/spinner';
import 'react-datepicker/dist/react-datepicker.css';
import 'c3/c3.css';
import App from './App';
import './services/MockApis';

const spinner = new SpinnerStore();

ReactDOM.render(
  <Provider spinner={spinner}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
