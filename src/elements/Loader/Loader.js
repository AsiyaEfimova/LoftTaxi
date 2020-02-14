import React from 'react';

const Loader = (props) => {
    return (
        props.error ?
        <div className="errorMessage">{props.error}</div> : null
    );
};

export default Loader;