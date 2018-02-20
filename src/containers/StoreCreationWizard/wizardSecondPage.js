import React from 'react'
import { reduxForm, Field } from 'redux-form'
import './storeWizard.css'
import validate from './validate'

import {
    SingleInput,
    FromToTimeInput,
    LoadingButton
} from '../../components/';

const RenderCheckbox = ({ input, meta, label }) => (
    <div>
        <input type="checkbox"
            {...input}
        ></input>
        <label>{label}</label>
    </div>
)


const WizardSecondPage = (props) => (
    <form className="flex-one-center" onSubmit={props.handleSubmit(props.submitForm)}>
        <label>Select store products</label>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Field name="ski" label="Ski" component={RenderCheckbox} />
            <Field name="snowboard" label="Snowboard" component={RenderCheckbox} />
            <Field name="skiLessons" label="Ski lessons" component={RenderCheckbox} />
            <Field name="skiPass" label="Ski Pass" component={RenderCheckbox} />
        </div>
        <div className="form-button-container">
            <LoadingButton onClick={props.previousPage} propStyle={{ width: '80px', height: '40px' }} title="BACK" />
            <LoadingButton type="submit" disabled={props.submitting} propStyle={{ width: '80px', height: '40px' }} title="NEXT" />
        </div>

    </form>
)

const WizardSecondPageForm = reduxForm({
    form: 'storeCreationWizard',
    destroyOnUnmount: false,
    validate
})(WizardSecondPage)
export default WizardSecondPageForm;

