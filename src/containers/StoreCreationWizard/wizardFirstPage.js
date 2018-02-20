import React from 'react'
import { reduxForm, Field } from 'redux-form'
import './storeWizard.css'
import validate from './validate'

import {
    SingleInput,
    FromToTimeInput,
    LoadingButton
} from '../../components/';

const createRenderer = render => ({ input, meta, label }) => (
    <div>
        {/* <pre>{JSON.stringify(meta,0,2)}</pre> */}
        {render(input, label, meta)}
        {meta.error && meta.touched && <div>{meta.error}</div>}
    </div>
)

const RenderInput = createRenderer((input, label, meta) => (
    <SingleInput style={meta.error && meta.touched ? { marginTop: '20px', borderColor: 'red' } : { marginTop: '20px' }}
        placeholder={label}
        {...input}
    />
))


const WizardFirstPage = (props) => (
    <form className="flex-one-center" onSubmit={props.handleSubmit(props.submitForm)}>
        <Field name="storeName" label="Store Name" component={RenderInput} />
        <Field name="email" label="Email" component={RenderInput} />
        <Field name="storeAddress" label="Store Address" component={RenderInput} />
        <Field name="storePhone" label="Store Phone" component={RenderInput} />
        <div></div>
        <FromToTimeInput
            title="Store Opening Hours"
        />        
        <div className="form-button-container">
            <LoadingButton disabled={true} propStyle={{ width: '80px', height: '40px' }} title="BACK" />
            <LoadingButton type="submit" disabled={props.submitting} propStyle={{ width: '80px', height: '40px' }} title="NEXT" />
        </div>

    </form>
)

const WizardFirstPageForm = reduxForm({
    form: 'storeCreationWizard',
    destroyOnUnmount: false,
    validate
})(WizardFirstPage)
export default WizardFirstPageForm;

