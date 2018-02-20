import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { logInUser } from '../../actions/loginActions';

import $ from "jquery";
import resizeLogger from '../../services/logger'
import {
    Layout,
    SingleInput,
    LoadingButton
} from '../../components/';
import './login.css'



class LogIn extends Component {
    constructor(props) {
        super(props)
        this.email = 'dudi LogIn'
        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }
        this.handleAuthenticate = this.handleAuthenticate.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.do = resizeLogger.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount login page')
        $(window).resize(this.do);
       
    }

    componentWillUnmount(){
        console.log('componentWillUnmount login page')
        $(window).off("resize", this.do); 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLogedIn) {
            if (nextProps.hasStore) {
                this.props.history.push('/settings');
            }
            else {
                this.props.history.push('/store-creation');
            }
        }
        else {
            this.setState({ errorMessage: nextProps.errorMessage })
        }
    }

    clearErrorMessage() {
        this.setState({ errorMessage: '' })
    }

    handleAuthenticate(e) {
        e.preventDefault();
        this.props.logInUser(this.state.email, this.state.password);
    }

    handleEmailChange(e) {

        this.clearErrorMessage();
        this.setState({ email: e.target.value });
    }
    handlePasswordChange(e) {
        this.clearErrorMessage();
        this.setState({ password: e.target.value });
    }

    responseGoogle = (response) => {
        this.props.logInUser(response.profileObj.email, response.profileObj.givenName, response.profileObj.imageUrl);
        this.props.history.push('/settings');
    }

    render() {
        return (
            <Layout>
                <div className='login-container'>
                    <div className='login-area'>
                        <div className='login-group'>
                            <label className="login-label"><b>Email</b></label>
                            <SingleInput value={this.state.email} onChange={this.handleEmailChange} />
                            <label className="login-label"><b>Password</b></label>
                            <SingleInput type='password' value={this.state.password} onChange={this.handlePasswordChange} />
                            <LoadingButton
                                title='Login'
                                isLoading={this.props.isLoading}
                                onClick={this.handleAuthenticate}
                            />
                            <div className="wrong-user-input">{this.state.errorMessage}</div>
                        </div>

                        <div className='social-login'>
                            <GoogleLogin
                                clientId="908578282812-ut22fdkatarvckir3bmremd3032jtbtf.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (store) => (
    {
        isLoading: store.userReducer.isLoading,
        errorMessage: store.userReducer.errorMessage,
        isLogedIn: store.userReducer.isLogedIn,
        hasStore: store.userReducer.hasStore
    }
)

export default connect(mapStateToProps, { logInUser })(withRouter(LogIn));