import {call, put} from "redux-saga/effects";


export function * asyncCall(payload ,asyncCall, request, success, fail) {
    try {
        yield put(request());
        const json = yield call(asyncCall,payload);
        const successAction = success(json);
        yield put(successAction)
    } catch(error) {
        const failureAction = fail(error);
        yield put(failureAction)
    }
}
