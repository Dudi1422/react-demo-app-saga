export const actionTypes = {    
    USER_CREATION_REQUEST: 'USER_CREATION_REQUEST',
    USER_CREATION_SUCCESS: 'USER_CREATION_SUCCESS',
    USER_CREATION_FAILURE: 'USER_CREATION_FAILURE'    
}

export const createUser = user => ({
    type: actionTypes.USER_CREATION_REQUEST,
    payload: user
})
