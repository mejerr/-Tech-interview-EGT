import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducers from '../reducers/index';
import watchComments from '../sagas/comments'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(watchComments);

export default store;