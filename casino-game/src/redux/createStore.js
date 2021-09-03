import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducers from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(thunk, sagaMiddleware));

// sagaMiddleware.run(watchSlots);

export default store;