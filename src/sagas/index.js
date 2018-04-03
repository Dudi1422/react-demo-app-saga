import { all, takeLatest } from 'redux-saga/effects'
import api from '../services/Api'
import { actionTypes as loginActions } from '../actions/loginActions'
import { actionTypes as storeCreationActions } from '../actions/storeCreationActions'
import { actionTypes as userCreationActions } from '../actions/userCreationActions'
import { login } from './loginSagas'
import { createStore } from './storeCreationWizard'
import { createUser } from './userCreation'

function* root() {
  yield all([
    takeLatest(loginActions.LOG_IN_START, login, api),
    takeLatest(storeCreationActions.STORE_CREATION_REQUEST, createStore, api),
    takeLatest(userCreationActions.USER_CREATION_REQUEST, createUser, api),
  ])
}
export default root;