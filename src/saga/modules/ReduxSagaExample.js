import { createAction, handleActions } from 'redux-actions';
import { fork, take, call, put, cancel } from 'redux-saga/effects';

const ASYNC_REQUEST = "ReduxSagaExample/ASYNC_REQUEST";
const ASYNC_REQUEST_SUCCESS = "ReduxSagaExample/ASYNC_REQUEST_SUCCESS";
const ASYNC_REQUEST_FAILURE = "ReduxSagaExample/ASYNC_REQUEST_FAILURE";

const asyncRequest = createAction(ASYNC_REQUEST);
const asyncRequestSuccess = createAction(ASYNC_REQUEST_SUCCESS);
const asyncRequestFailure = createAction(ASYNC_REQUEST_FAILURE);

const initialState = {
    count: 0,
    status: ''
};

export default function * asyncRequestSaga(info) {
    while(true) {
        const action = yield take(ASYNC_REQUEST);
        const {data} = action;
        try {
            const json = yield call(null);
            const successAction = asyncRequestSuccess(json,12);
            yield put(successAction)
        } catch(error) {
            const failureAction = asyncRequestFailure(error);
            yield put(failureAction)
        }
    }
}

export const ReduxSagaExampleReducer =  handleActions({
    [asyncRequest]: (state, payload) => {
        return { ...state, status: 'request' };
    },
    [asyncRequestSuccess]: (state, payload) => {
        return { ...state, status: 'success', count:200 };
    },
    [asyncRequestFailure]: (state, payload) => {
        return { ...state, status: 'fail', count:404 };
    },
}, initialState);


