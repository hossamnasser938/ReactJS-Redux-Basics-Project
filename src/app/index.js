import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import App from './containers/App';

const initialPreferences = {
    notifications: false
}

const preferencesReducer = ( state = initialPreferences, action ) => {
    let copiedState = { ...state };

    switch ( action.type ) {
        case "ENABLE_NOTIFICATIONS":
            copiedState.notifications = true;
            break;
        case "DISABLE_NOTIFICATIONS":
            copiedState.notifications = false;
            break;
    }

    return copiedState;
};

const Store = createStore(
    preferencesReducer,
    {},
    applyMiddleware( createLogger() )
);

render(
  <Provider store={ Store }><App/></Provider>,
   window.document.getElementById("app")
);
