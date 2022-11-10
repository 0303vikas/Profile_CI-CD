import React from 'react'
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function PrivateRoute({ isloggedin, children}) {     
    return(
        
        isloggedin ? children : <Navigate to='/login' />
        
    )
}

export default PrivateRoute