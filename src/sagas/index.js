import { all, takeLatest } from 'redux-saga/effects'
import api from '../services/Api'
import { actionTypes } from '../actions/loginActions'
import { login } from './loginSagas'

function* root() {
  yield all([
    takeLatest(actionTypes.LOG_IN_START, login, api)
  ])
}
export default root;