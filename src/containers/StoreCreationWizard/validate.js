import validator from 'validator';
const validate = values => {
    const errors = {}
    if (!values.storeName) {
        errors.storeName = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    else if (!validator.isEmail(values.email)) {
        errors.email = 'Invalid Email'
    }
    if (!values.storeAddress) {
        errors.storeAddress = 'Required'
    }
    if (!values.storePhone) {
        errors.storePhone = 'Required'
    }
    return errors;
}

export default validate;