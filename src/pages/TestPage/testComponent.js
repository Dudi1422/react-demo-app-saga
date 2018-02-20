import React from 'react'
import { reduxForm, Field } from 'redux-form'
import validator from 'validator';

import {
    SingleInput,
    FromToTimeInput,
} from '../../components/';


const showResults = (val) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('#############################################')
            console.log(val)
            resolve()
        }, 2000)
    })
}

const createRenderer = render => ({ input, meta, label }) => (
    <div>
        {/* <pre>{JSON.stringify(meta,0,2)}</pre> */}
        <label>{label}</label>
        {render(input, label)}
        {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
)


const RenderInput = createRenderer((input, label) => (
    <SingleInput style={{ marginBottom: '30px' }}
        placeholder={label}  
        {...input}      
    />
))

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    else if (!validator.isEmail(values.email)) {
        errors.email = 'Invalid Email'
    }
    return errors;
}

const TestComponent = (props) => (
    <form onSubmit={props.handleSubmit(showResults)}>
        <Field name="firstName" label="First Name" component={RenderInput} />
        <Field name="lastName" label="Last Name" component={RenderInput} />
        <Field name="email" label="Email" component={RenderInput} />

        <button type="submit" disabled={props.submitting}>Submit</button>
    </form>
)

const DemoForm = reduxForm({
    form: 'demo',
    destroyOnUnmount: false,
    validate
})(TestComponent)
export default DemoForm;

