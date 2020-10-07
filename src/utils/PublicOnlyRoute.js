import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const PublicOnlyRoute = ({ render, component, ...props}) => {
    const context = useContext(UserContext);
    const Component = render ? render : component;
    return (
        <Route 
            {...props}
            render={componentProps => (
                Object.keys(context.user).length !== 0
                    ? <Redirect to={'/'} />
                    : <Component {...componentProps} />
            )}
        />
    );
}

export default PublicOnlyRoute;