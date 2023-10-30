import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {user,loading}= useContext(AuthContext)
    if (loading) {
        return <h2>Baby is loading</h2>
    }
    if (user?.email) {
        return children
    }
    return <Navigate  state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;