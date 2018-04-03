import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStore } from '../../actions/storeCreationActions'
import { submit } from 'redux-form'

import {
    Layout,
    SingleInput,
    Section,
    FromToTimeInput,
    LoadingButton
} from '../../components/';

import {
    StoreSettings,
} from '../../containers/';

import WizardFirstPage from '../../containers/StoreCreationWizard/wizardFirstPage'
import WizardSecondPage from '../../containers/StoreCreationWizard/wizardSecondPage'
import WizardThirdPage from '../../containers/StoreCreationWizard/wizardThirdPage'

import './storeCreation.css'

const back = () => {
    return { type: 'store-creation-wizard-back' }
}

class StoreCreation extends Component {
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this);        
    }

    componentWillReceiveProps(nextProps) {       
        if(nextProps.page > 3){
            this.props.createStore(this.props.form, this.props.userId)
        }
        if(nextProps.storeCreated){
            this.props.history.push('/settings')
        }
    }

    submitForm() {       
        console.log('submitForm');
    }   

    render() {
        console.log(this.props)
        return (
            <Layout>
                <div className="store-creation-container">
                    <div className="progress-indicator-container">
                        <div>
                            A
                        </div>
                        <div>
                            B
                        </div>
                        <div>
                            <LoadingButton disabled={this.props.page === 1 || this.props.page>3} onClick={this.props.back} propStyle={{ width: '80px', height: '40px' }} title="BACK" />
                            <LoadingButton isLoading={this.props.page>3} onClick={() => this.props.submit('storeCreationWizard')} propStyle={{ width: '80px', height: '40px' }} title="NEXT" />
                        </div>
                    </div>
                    <div className="main-store-creation-container">
                        <div className="side-area">
                        </div>
                        <div className="form-container">
                            <Section cName="store-creation-form">
                                <div className="row" />
                                {
                                    this.props.page === 1 && <WizardFirstPage initialValues={{ email: this.props.email || 'dudu1422@gmail.com', storeName: 'My Store' }} submitForm={this.nextPage} />
                                }

                                {
                                    this.props.page === 2 && <WizardSecondPage previousPage={this.previousPage} submitForm={this.nextPage} />
                                }

                                {
                                    this.props.page >= 3 && <WizardThirdPage previousPage={this.previousPage} submitForm={this.submitForm} />
                                }

                            </Section>
                        </div>
                        <div className="side-area">
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (store) => (
    {
        userId: store.userReducer.userId,
        email: store.userReducer.email,
        page: store.storeCreationReducer.page,
        form: store.form.storeCreationWizard,
        storeCreated: store.storeCreationReducer.storeCreated,        
    }
)

export default connect(mapStateToProps, { submit, back, createStore })(withRouter(StoreCreation));
