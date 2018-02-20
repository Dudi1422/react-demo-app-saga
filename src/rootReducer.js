import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import userReducer from './reducers/userReducer';

export default combineReducers({
    
    userReducer,
    form: formReducer
   
})