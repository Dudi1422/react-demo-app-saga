import { put, call } from 'redux-saga/effects'
import { actionTypes } from '../actions/loginActions'

export function* login(api, { payload: {email, password} }) {
    const response = yield call(api.login, email, password)
    if (response.ok) {
        const storeResponse = yield call(api.getUserStore, response.data._id)        
        yield put({
            type: actionTypes.LOG_IN_SUCCESS,
            payload: { userName: response.data.firstName, hasStore: storeResponse.data.length>0, email: email, userId: response.data._id }
        })
    }
    else {
        yield put({
            type: actionTypes.LOG_IN_FAIL,
            payload: { error: response.data.error }
        })
    }
}