import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const middleware = [thunk];
middleware.push(createLogger());
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
    // {},
    // composeWithDevTools(
    //     ...applyMiddleware(thunk),
    // )
);

export default store;