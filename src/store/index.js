import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import Notes from './notes/reducer'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const middlewares = [reduxThunk];
const Store  = createStore(Notes, composeEnhancers(
	applyMiddleware(...middlewares)
));

export default Store;


