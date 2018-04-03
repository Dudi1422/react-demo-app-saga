import { put, call } from 'redux-saga/effects'
import { actionTypes } from '../actions/storeCreationActions'

export function* createStore(api, { payload: {form, admin}}) {
    const response = yield call(api.createStore, {...form.values, ...admin})
    if (response.ok) {
        yield put({
            type: actionTypes.STORE_CREATION_SUCCESS,
            payload: { }
        })
    }
    else {
        yield put({
            type: actionTypes.STORE_CREATION_FAILURE,
            payload: { error: response.data.error }
        })
    }
}