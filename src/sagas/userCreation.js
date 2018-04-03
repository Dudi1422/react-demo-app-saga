import { put, call } from 'redux-saga/effects'
import { actionTypes } from '../actions/userCreationActions'

export function* createUser(api, { payload }) {
    const response = yield call(api.createUser, payload)
    if (response.ok) {               
        yield put({
            type: actionTypes.USER_CREATION_SUCCESS        
        })
    }
    else {
        yield put({
            type: actionTypes.USER_CREATION_FAILURE,
            payload: { error: response.data.error }
        })
    }
}