import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import Store from "./Store"


render(
  <Provider store={ Store }><App/></Provider>,
   window.document.getElementById("app")
);
