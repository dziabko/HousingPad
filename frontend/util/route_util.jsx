import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// renders component if logged out, otherwise redirects to the root url
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);

// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/signup" />
            )
    )} />
);

// access the Redux state to check if the user is logged in
const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

// connect Auth to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

// connect Protected to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));