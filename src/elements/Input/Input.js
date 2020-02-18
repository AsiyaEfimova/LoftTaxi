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
                autoComplete={props.autoComplete}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={ChangeHandler}
                onFocus={FocusHandler}
                ref={props.register}
            />
        </div>
    );
};
export default Input;


// const Input = ({ label, register, required }) => (
//     <>
//         <label>{label}</label>
//         <input name={label} ref={register({ required })} />
//     </>
// )