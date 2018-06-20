import { call, all, take, fork } from "redux-saga/effects";
import { asyncCalling ,asyncRequest, asyncRequestFailure, asyncRequestSuccess} from "../reducers/ReduxSagaExample";
import * as SampleAPI  from '../apis/SampleApi';
import { asyncCall } from './Common';

function * asyncRequestSaga(info) {
    while(true) {
        const action = yield take(asyncCalling);
        yield call(asyncCall, action.payload, SampleAPI.getPostAPI, asyncRequest, asyncRequestSuccess, asyncRequestFailure);
    }
}

export default function* root() {
    yield all([
        fork(asyncRequestSaga)
    ]);
}