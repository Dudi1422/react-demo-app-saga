import { actionTypes } from '../actions/loginActions';
const INITIAL_STATE = {
    isLogedIn: false,
    email: '',
    isLoading: false,
    userName: '',
    imageUrl: '',
    errorMessage: null,
    hasStore: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN_START:
            return { ...state, isLoading: true, errorMessage: null };

        case actionTypes.LOG_IN_SUCCESS:
            return {
                ...state, isLogedIn: true, errorMessage: null, email: action.payload.email, isLoading: false,
                     userName: action.payload.userName, hasStore: action.payload.hasStore, userId: action.payload.userId,
                    imageUrl: action.payload.imageUrl
            };
        case actionTypes.LOG_IN_FAIL:
            return { ...state, isLoading: false, errorMessage: action.payload.error };
        case actionTypes.LOG_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
};