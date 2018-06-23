import {call, all, take, fork, takeLatest, put} from "redux-saga/effects";
import { asyncCall, ASYNC} from "../actions/SampleApi";
import * as SampleAPI  from '../apis/SampleApi';

function * asyncRequestSaga(info) {

    try {
        yield put(asyncCall.request());
        const json = yield call(SampleAPI.getPostAPI,info.payload);
        yield put(asyncCall.success(json));
    } catch(error) {
        yield put(asyncCall.failure(error));
    }

}

export default function* root() {
    yield all([
        takeLatest(ASYNC.INDEX, asyncRequestSaga) // asyncCall
    ]);
}