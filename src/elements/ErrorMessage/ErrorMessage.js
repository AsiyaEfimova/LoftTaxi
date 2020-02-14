import React from 'react';

const ErrorMessage = (props) => {
    return (
        props.error ?
        <div className="errorMessage">{props.error}</div> : null
    );
};

export default ErrorMessage;