import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import userReducer from './reducers/userReducer';
import storeCreationReducer from './reducers/storeCreationReducer';


export default combineReducers({
    
    userReducer,
    storeCreationReducer,
    form: formReducer
   
})