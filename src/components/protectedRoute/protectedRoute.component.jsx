import React from 'react';
import { connect } from 'react-redux'

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
    component: WrappedComponent,
    user,
    ...otherProps
}) => {

    return (
        <Route {...otherProps} render={(props) => {
            if (user) {
                return <WrappedComponent {...props}/>
            } else {
                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            }
        }}/>

    );
};

const mapStateToProps = ({ user: {currentUser}}) =>({
    user: currentUser
});

export default connect(mapStateToProps)(ProtectedRoute);