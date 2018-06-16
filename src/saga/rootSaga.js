import { fork } from 'redux-saga/effects';
import asyncRequestSaga from './modules/ReduxSagaExample';

export default function* rootSaga() {
    yield fork(asyncRequestSaga);
}