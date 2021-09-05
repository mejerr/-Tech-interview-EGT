import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/createStore';
import App from './containers/App';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

