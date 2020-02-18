import React from 'react';
import ErrorMessage from "../ErrorMessage";

const Input = React.forwardRef(({name, label, type, autoComplete, value, focusHandler, inputClass, errors, rulles}, ref) => {
    let className;
    inputClass ? (className = ' ' + inputClass) : (className = '');
    errors[name] && (className += ' error');
    const handlerOnFocus = (e)=>{
        if(focusHandler){
            focusHandler(e.target);
        }
    };
    let errorMessage = '';
    if(errors[name]){
        rulles ? errorMessage = (rulles[errors[name].type]) : (errorMessage = errors[name].message)
    }
    return (
        <div className={'input' + className}>
            <label>{label}</label>
            <input
                autoComplete={autoComplete}
                type={type}
                name={name}
                value={value}
                // onChange={ChangeHandler}
                onFocus={handlerOnFocus}
                ref={ref}
            />
            <ErrorMessage error={errorMessage}/>
        </div>
    );
});

export default Input;