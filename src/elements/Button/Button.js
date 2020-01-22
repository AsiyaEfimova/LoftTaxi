import React from 'react';

const Button = (props) => {
    let className;
    props.class ? (className = ' ' + props.class) : (className = '');
    return <button className={'button' + className}>{props.text}</button>;
};
export default Button;
