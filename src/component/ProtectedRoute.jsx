import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
    let { user } = useUserAuth(); // do not forget to add parenthesis()
    if (!user) {
        return < Navigate to="/" />
    }
    return children
}

export default ProtectedRoute


// note //
// children --->> what we want to protect component 
