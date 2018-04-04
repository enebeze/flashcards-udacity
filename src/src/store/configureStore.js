import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default (rootReducer, rootSaga) => {
    const middleware = [];
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