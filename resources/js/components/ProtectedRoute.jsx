import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { authenticationService } from '../services/authentication.service';

export default class ProtectedRoute extends Component 
{
    static defaultProps = {
        isAuthenticated: false,
        redirectTo: '/login'
    };

    render() 
    {
      const { component: Component, redirectTo, ...props } = this.props
      const currentUser = authenticationService.currentUserValue;
      return (
        <Route 
          {...props} 
          render={ props => (
            currentUser ?
              <Component {...props} /> :
              <Redirect to={redirectTo} />
          )} 
        />
      )
    }
  }