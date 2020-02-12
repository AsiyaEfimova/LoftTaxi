import React from 'react';
import { Link } from 'react-router-dom';

const Alert = (props) => {
    let { header, body, linkText, linkTo } = props;
    const clickHandler = (e)=>{
        e.preventDefault();
        props.clickHandler();
    };
    return (
        <div className="formAlert">
            <h2>{header}</h2>
            <p>{body}</p>
            {linkTo ?
                <Link to={linkTo} className="button">{linkText}</Link> :
                <button onClick={clickHandler} className="button">{linkText}</button>
            }
        </div>
    )
};

export default Alert;