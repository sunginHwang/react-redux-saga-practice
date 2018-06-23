import { createAction } from 'redux-actions';

 export const ASYNC = "ReduxSagaExample/ASYNC";
 const ASYNC_REQUEST = "ReduxSagaExample/ASYNC_REQUEST";
 const ASYNC_REQUEST_SUCCESS = "ReduxSagaExample/ASYNC_REQUEST_SUCCESS";
 const ASYNC_REQUEST_FAILURE = "ReduxSagaExample/ASYNC_REQUEST_FAILURE";

 export const asyncCalling = createAction(ASYNC);
 export const asyncRequest = createAction(ASYNC_REQUEST);
 export const asyncRequestSuccess = createAction(ASYNC_REQUEST_SUCCESS);
 export const asyncRequestFailure = createAction(ASYNC_REQUEST_FAILURE);