import React, { Component } from 'react';
import Settings from './pages/Settings'
import Login from './pages/Login'
import ProductsSettings from './pages/ProductsSettings'
import TestPage from './pages/TestPage'
import StoreCreation from './pages/StoreCreation'
import { connect } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Route, 
  Switch,
  Redirect
} from 'react-router-dom'

const authProvider = (WrappedComponent, isLogedIn) => {  
  return ({ match }) => (    
    isLogedIn ? 
      <WrappedComponent {...this.props } match={match}/> : 
      <Redirect to="login" />
  )
}

class App extends Component {
  render() {
    const { isLogedIn } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact component={StoreCreation} path="/" />          
          <Route component={Login} path="/login" />
          <Route component={authProvider(Settings, isLogedIn)} path="/settings" />
          <Route component={authProvider(StoreCreation, isLogedIn)} path="/store-creation" /> 
          <Route component={authProvider(ProductsSettings, isLogedIn)} path="/products-settings" />
          <Route component={authProvider(ProductsSettings, isLogedIn)} path="/payment-settings" />
          <Route component={authProvider(ProductsSettings, isLogedIn)} path="/general-settings" />
          <Route component={authProvider(ProductsSettings, isLogedIn)} path="/store-settings" />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({userReducer: {isLogedIn}}) => ({ 
  isLogedIn
})

export default connect(mapStateToProps)(App);
