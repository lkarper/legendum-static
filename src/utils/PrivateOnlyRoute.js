import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const PrivateRoute = ({ component, ...props }) => {
    const context = useContext(UserContext);
    const Component = component;

    return (
        <Route
            {...props}
            render={componentProps => (
                Object.keys(context.user).length !== 0
                    ? 
                        <Component {...componentProps} />
                    : 
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: componentProps.location.pathname }
                            }}
                        />
            )}
        />
    );
}

export default PrivateRoute;