import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
     rootReducer,     
     applyMiddleware(logger, sagaMiddleware)
    );

sagaMiddleware.run(rootSaga)
export default store
