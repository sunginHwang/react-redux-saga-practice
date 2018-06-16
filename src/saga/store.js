import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import modules from './modules';
import rootSaga from './rootSaga';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        modules,
        initialState,
        applyMiddleware(
            sagaMiddleware
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};