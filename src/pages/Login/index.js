import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { logInUser } from '../../actions/loginActions';
import { createUser } from '../../actions/userCreationActions';

import $ from "jquery";

import {
    Layout,
    SingleInput,
    LoadingButton
} from '../../components/';
import './login.css'

const resize = () => {
    console.log('resize')
}

class LogIn extends Component {
    constructor(props) {
        super(props)
        this.email = 'dudi LogIn'
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            loginPage: true, // quick and dirty
            firstName: '',
            lastName: ''
        }
        this.handleAuthenticate = this.handleAuthenticate.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentDidMount() {
        $(window).resize(resize);
    }

    componentWillUnmount() {
        $(window).off("resize", resize);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLogedIn) {
            if (nextProps.hasStore) {
                this.props.history.push('/settings')
            }
            else {
                this.props.history.push('/store-creation');
            }
        }
        else {
            this.setState({ errorMessage: nextProps.errorMessage })
        }
    }

    createAccount = () => {
        this.setState({ loginPage: false })
    }

    clearErrorMessage() {
        this.setState({ errorMessage: '' })
    }

    handleAuthenticate(e) {
        e.preventDefault();
        this.props.logInUser(this.state.email, this.state.password);
    }

    handleCreateUser = (e)=> {
        const { email, firstName, lastName, password } = this.state;
        this.props.createUser({ ...{ email }, ...{ firstName }, ...{ lastName }, ...{ password } });
    }

    handleEmailChange(e) {
        this.clearErrorMessage();
        this.setState({ email: e.target.value });
    }
    handleFirstNameChange = (e) => {
        this.clearErrorMessage();
        this.setState({ firstName: e.target.value });
    }
    handleLastNameChange = (e) => {
        this.clearErrorMessage();
        this.setState({ lastName: e.target.value });
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
                        {
                            this.state.loginPage ?
                                <div className='login-group'>
                                    <label className="login-label"><b>Email</b></label>
                                    <SingleInput placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                                    <label className="login-label"><b>Password</b></label>
                                    <SingleInput placeholder="Password" type='password' value={this.state.password} onChange={this.handlePasswordChange} />
                                    <LoadingButton
                                        title='Login'
                                        isLoading={this.props.isLoading}
                                        onClick={this.handleAuthenticate}
                                    />
                                    <div className="wrong-user-input">{this.state.errorMessage}</div>
                                    <div className="create-account">
                                        <label onClick={this.createAccount}><u>New user ? create an account</u></label>
                                    </div>
                                </div>
                                :
                                <div className='login-group'>
                                    <label className="login-label"><b>Email</b></label>
                                    <SingleInput placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                                    <label className="login-label"><b>First Name</b></label>
                                    <SingleInput placeholder="First name" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                                    <label className="login-label"><b>Last Name</b></label>
                                    <SingleInput placeholder="Last name" value={this.state.lastName} onChange={this.handleLastNameChange} />
                                    <label className="login-label"><b>Password</b></label>
                                    <SingleInput placeholder="Password" type='password' value={this.state.password} onChange={this.handlePasswordChange} />
                                    <LoadingButton
                                        title='Create'
                                        isLoading={this.props.isLoading}
                                        onClick={this.handleCreateUser}
                                    />
                                    <div className="wrong-user-input">{this.state.errorMessage}</div>
                                    {
                                        this.state.loginPage && <div className="create-account">
                                            <label onClick={this.createAccount}><u>New user ? create an account</u></label>
                                        </div>
                                    }

                                </div>

                        }

                        {
                            this.state.loginPage && <div className='social-login'>
                                <GoogleLogin
                                    clientId="908578282812-ut22fdkatarvckir3bmremd3032jtbtf.apps.googleusercontent.com"
                                    buttonText="Login with Google"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                />
                            </div>
                        }

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

export default connect(mapStateToProps, { logInUser, createUser })(withRouter(LogIn));