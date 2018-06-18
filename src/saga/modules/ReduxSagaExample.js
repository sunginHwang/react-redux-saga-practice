import { createAction, handleActions } from 'redux-actions';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import axios from 'axios';
const ASYNC_REQUEST = "ReduxSagaExample/ASYNC_REQUEST";
const ASYNC_REQUEST_SUCCESS = "ReduxSagaExample/ASYNC_REQUEST_SUCCESS";
const ASYNC_REQUEST_FAILURE = "ReduxSagaExample/ASYNC_REQUEST_FAILURE";



const getPostAPI =  (url) => {
     return axios.get(url);
};

export const asyncRequest = createAction(ASYNC_REQUEST);
export const asyncRequestSuccess = createAction(ASYNC_REQUEST_SUCCESS);
export const asyncRequestFailure = createAction(ASYNC_REQUEST_FAILURE);


const initialState = {
    count: 0,
    status: '',
    title: '',
    body: ''
};

export default function * asyncRequestSaga(info) {
    while(true) {
        const action = yield take(ASYNC_REQUEST);
        const { data, payload } = action;

        try {
            const json = yield call(getPostAPI,payload);
            const successAction = asyncRequestSuccess(json);
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
        return { ...state, status: 'success',count: 200, body:payload.payload.data.body, title: payload.payload.data.title };
    },
    [asyncRequestFailure]: (state, payload) => {
        return { ...state, status: 'fail', count:404, body:'', title: '' };
    },
}, initialState);


