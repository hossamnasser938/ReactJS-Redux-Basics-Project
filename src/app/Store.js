import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import preferencesReducer from './reducers/PreferencesReducer';
import thunk from 'redux-thunk';


const Store = createStore(
    preferencesReducer,
    {},
    applyMiddleware( createLogger(), thunk )
);

export default Store;
