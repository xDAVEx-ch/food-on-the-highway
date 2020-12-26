import React from 'react';

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
    component: WrappedComponent,
    currentUser: user,
    ...otherProps
}) => {
    console.log(user);
    return (
        <Route {...otherProps} render={(props) => {
            if (true) {
                return <WrappedComponent {...props}/>
            } else {
                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            }
        }}/>

    );
};

export default ProtectedRoute;