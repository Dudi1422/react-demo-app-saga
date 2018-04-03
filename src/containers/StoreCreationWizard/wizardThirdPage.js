import React from 'react'
import { reduxForm, Field } from 'redux-form'
import './storeWizard.css'
import validate from './validate'

import {
    SingleInput,
    FromToTimeInput,
    LoadingButton
} from '../../components/';

const RenderCheckbox = ({ input, meta, label, ...rest }) => (
    <div>
        <input 
            {...input}  
            {...rest}          
        ></input>
        <label>{label}</label>
    </div>
)


const WizardSecondPage = (props) => (
    <form className="flex-one-center" onSubmit={props.handleSubmit}>
        <label>Select store products</label>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Field name="a"  type="checkbox" label="A" component={RenderCheckbox} />
            <Field name="b" type="checkbox" label="B" component={RenderCheckbox} />            
        </div>       
    </form>
)

const WizardSecondPageForm = reduxForm({
    form: 'storeCreationWizard',
    destroyOnUnmount: false,
    validate,
    onSubmit: ()=>({})
})(WizardSecondPage)
export default WizardSecondPageForm;

