import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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

import './storeCreation.css'
class StoreCreation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1
        }
        this.submitForm = this.submitForm.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    submitForm() {       
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    render() {
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
                            C
                        </div>
                    </div>
                    <div className="main-store-creation-container">
                        <div className="side-area">
                        </div>
                        <div className="form-container">
                            <Section cName="store-creation-form">
                                <div className="row" />
                                {
                                    this.state.page === 1 && <WizardFirstPage initialValues={{email: 'dudi@gmail.com', storeName: 'My Store'}} submitForm={this.submitForm}/>
                                }

                                {
                                    this.state.page === 2 && <WizardSecondPage previousPage={this.previousPage} submitForm={this.submitForm}/>
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

    }
)

export default connect(mapStateToProps)(withRouter(StoreCreation));
