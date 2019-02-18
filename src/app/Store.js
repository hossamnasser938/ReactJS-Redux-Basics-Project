import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import preferencesReducer from './reducers/PreferencesReducer'


const Store = createStore(
    preferencesReducer,
    {},
    applyMiddleware( createLogger() )
);

export default Store;
