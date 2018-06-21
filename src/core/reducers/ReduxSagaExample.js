import {  handleActions } from 'redux-actions';
import * as ACTION from '../actions/SampleApi';

const initialState = {
    count: 0,
    status: '',
    title: '',
    body: ''
};

export const ReduxSagaExampleReducer =  handleActions({
    [ACTION.asyncRequest]: (state, payload) => {
        console.log('request');
        return { ...state, status: 'request', count:100 };
    },
    [ACTION.asyncRequestSuccess]: (state, payload) => {
        console.log('success');
        return { ...state, status: 'success',count: 200, body:payload.payload.data.body, title: payload.payload.data.title };
    },
    [ACTION.asyncRequestFailure]: (state, payload) => {
        console.log('fail');
        return { ...state, status: 'fail', count:404, body:'', title: '' };
    },
}, initialState);


