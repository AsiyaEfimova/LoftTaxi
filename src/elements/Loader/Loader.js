import React from 'react';

const Loader = (props) => {
    return (
        props.isLoading ?
        <div className="loader">Loading...</div> : null
    );
};

export default Loader;