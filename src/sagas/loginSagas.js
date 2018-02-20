import { put, call } from 'redux-saga/effects'
import { actionTypes } from '../actions/loginActions'

export function* login(api, { payload: {email, password} }) {
    console.log(email)
    const response = yield call(api.login, email, password)
    if (response.ok) {
        yield put({
            type: actionTypes.LOG_IN_SUCCESS,
            payload: { userName: response.data.firstName, hasStore: response.data.hasStore }
        })
    }
    else {
        yield put({
            type: actionTypes.LOG_IN_FAIL,
            payload: { error: response.data.error }
        })
    }
}