export const actionTypes = {    
    STORE_CREATION_REQUEST: 'STORE_CREATION_REQUEST',
    STORE_CREATION_SUCCESS: 'STORE_CREATION_SUCCESS',
    STORE_CREATION_FAILURE: 'STORE_CREATION_FAILURE'    
}

export const createStore = (storeData, userId) => ({
    type: actionTypes.STORE_CREATION_REQUEST,
    payload: {form: storeData, admin: {admin: userId}}
})
