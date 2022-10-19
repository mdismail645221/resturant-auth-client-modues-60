import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from '../contexts/UseContext';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthProvider)


    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;