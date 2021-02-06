import React from 'react';

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
    component: WrappedComponent,
    currentUser: user,
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

export default ProtectedRoute;