import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

export default (rootReducer, rootSaga) => {
    const middleware = [logger];
    const enhancers = [];

    /* Saga */
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    /* Store */
    const store = createStore(rootReducer, compose(...enhancers));

    /* Run Saga */
    sagaMiddleware.run(rootSaga);

    return store;
};