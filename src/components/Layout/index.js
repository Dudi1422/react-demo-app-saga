import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logOutUser } from '../../actions/loginActions';
import {
    Header,
    Body
}
    from '../'
import './layout.css'

class Layout extends Component {    

    handleLogout = ()=>{
        this.props.logOutUser();
        this.props.history.push('/login');
    }
    render() {
        const { userName, imageUrl, subHeader, children } = this.props;
        return (
            <div className="vbox viewport">
                <Header
                    userName={userName}
                    imageUrl={imageUrl}
                    onLogout={this.handleLogout}
                >
                    {subHeader}
                </Header>
                <Body>
                    {children}
                </Body>

                <footer>Footer</footer>
            </div>
        )
    }
}


const mapStateToProps = ({ userReducer: { imageUrl, userName } }) => ({
    imageUrl,
    userName
})

export default connect(mapStateToProps, {logOutUser})(withRouter(Layout));