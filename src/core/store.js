import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

    const store = createStore(
        reducers,
        devTools,
        applyMiddleware(
            sagaMiddleware
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};