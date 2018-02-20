export const actionTypes = {    
    LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
    LOG_IN_START: 'LOG_IN_START',
    LOG_IN_FAIL: 'LOG_IN_FAIL',
    LOG_OUT: 'LOG_OUT'   
}

export const logInUser = (email, password) => ({
    type: actionTypes.LOG_IN_START,
    payload: {...{email}, ...{password}}
})

export const logOutUser = () => ({
    type: actionTypes.LOG_OUT,    
})