import React from 'react';
import { Link } from 'react-router-dom';

const Alert = (props) => {
    let { header, body, linkText, linkTo, clickHandler } = props;
    const onClickHandler = (e)=>{
        e.preventDefault();
        clickHandler();
    };
    return (
        <div className="formAlert">
            <h2>{header}</h2>
            <p>{body}</p>
            {linkTo && <Link to={linkTo} className="button">{linkText}</Link>}
            {clickHandler && <button onClick={onClickHandler} className="button">{linkText}</button>}
        </div>
    )
};

export default Alert;