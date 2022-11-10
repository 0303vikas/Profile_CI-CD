import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = ({ err,col }) => {
    if(!err) return null

    return(
        <div className='errormessage' style={{ color: col, padding: '5px', border: `2px solid ${col}` }}>{err}</div>
    )
}

ErrorMessage.propTypes = {
    err: PropTypes.string.isRequired,
    col: PropTypes.string
}




export default ErrorMessage