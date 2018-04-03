
import { actionTypes } from '../actions/storeCreationActions'
const INITIAL_STATE = {
    page: 1,
    storeCreated: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case '@@redux-form/SET_SUBMIT_SUCCEEDED':
            {
                if (action.meta.form === 'storeCreationWizard')
                    return { ...state, page: state.page + 1 };
                return state;
            }

        case 'store-creation-wizard-back':
            return { ...state, page: state.page - 1 };

        case actionTypes.STORE_CREATION_SUCCESS:
            return { ...state, page: state.page - 1, storeCreated: true };

        default:
            return state;
    }
};