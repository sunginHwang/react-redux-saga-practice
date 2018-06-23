import {call, all, take, fork, takeLatest, put} from "redux-saga/effects";
import { asyncCalling ,asyncRequest, asyncRequestFailure, asyncRequestSuccess, ASYNC} from "../actions/SampleApi";
import * as SampleAPI  from '../apis/SampleApi';
import { asyncCall } from './Common';

function * asyncRequestSaga(info) {

    try {
        yield put(asyncRequest());
        const json = yield call(SampleAPI.getPostAPI,info.payload);
        yield put(asyncRequestSuccess(json));
    } catch(error) {
        yield put(asyncRequestFailure(error));
    }

}

export default function* root() {
    yield all([
        takeLatest(ASYNC, asyncRequestSaga) // asyncCall
    ]);
}