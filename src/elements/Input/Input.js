import React from 'react';

const Input = (props) => {
    let className;
    props.class ? (className = ' ' + props.class) : (className = '');
    const ChangeHandler = (e) => {
        if(props.changeHandler) {
            props.changeHandler({name: props.name, value: e.target.value});
        }
    };
    const FocusHandler = (e)=>{
        if(props.focusHandler){
            props.focusHandler(e.target);
        }
    };
    return (
        <div className={'input' + className}>
            <label>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={ChangeHandler}
                onFocus={FocusHandler}
            />
        </div>
    );
};
export default Input;
