import React from 'react';

const Input = (props) => {
    let className;
    props.class ? className = ' '+props.class : className = '';
    const ChangeHandler = (e) => {
        props.changeHandler({name: props.name, value: e.target.value});
    };
    return (
        <div className={'input'+className}>
            <label>{props.label}</label>
            <input type={props.type} name={props.name} onChange={ChangeHandler} />
        </div>
    );
};
export default Input;