
import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { logInUser } from '../../actions/loginActions';
import FontAwesome from 'react-fontawesome'
import DemoForm from './testComponent'

import {
    Layout,
    SingleInput,
    LoadingButton
} from '../../components/';
import './testPage.css'

class TestPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }



    render() {
        return (
           <DemoForm />
        )
    }
}

export default TestPage
