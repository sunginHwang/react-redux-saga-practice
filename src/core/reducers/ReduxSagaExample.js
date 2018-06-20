import { createAction, handleActions } from 'redux-actions';
import * as SampleApiType from '../actionTypes/SampleApi';

export const asyncCalling = createAction(SampleApiType.ASYNC);
export const asyncRequest = createAction(SampleApiType.ASYNC_REQUEST);
export const asyncRequestSuccess = createAction(SampleApiType.ASYNC_REQUEST_SUCCESS);
export const asyncRequestFailure = createAction(SampleApiType.ASYNC_REQUEST_FAILURE);

const initialState = {
    count: 0,
    status: '',
    title: '',
    body: ''
};

export const ReduxSagaExampleReducer =  handleActions({
    [asyncRequest]: (state, payload) => {
        console.log('request');
        return { ...state, status: 'request', count:100 };
    },
    [asyncRequestSuccess]: (state, payload) => {
        console.log('success');
        return { ...state, status: 'success',count: 200, body:payload.payload.data.body, title: payload.payload.data.title };
    },
    [asyncRequestFailure]: (state, payload) => {
        console.log('fail');
        return { ...state, status: 'fail', count:404, body:'', title: '' };
    },
}, initialState);


