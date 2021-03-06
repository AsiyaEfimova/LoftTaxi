import React, { useState } from 'react';
import ErrorMessage from "../ErrorMessage";

const InputAutocomplete = React.forwardRef(({name, label, type, value, focusHandler, inputClass, errors, rulles, itemList}, ref) => {
    let className = '';
    errors[name] && (className += ' error');
    const container = React.createRef();
    const [inputValue, setValue] = useState({
        [name]: value
    });
    const handlerOnFocus = (e)=>{
        openList();
    };
    const openList = () => {
        const list = container.current.querySelectorAll('.completeList');
        list.forEach(list => {
            list.classList.add('open');
        });
    };
    const closeList = ()=>{
        const list = container.current.querySelectorAll('.completeList');
        list.forEach(list => {
            list.classList.remove('open');
        });
    };
    const clearInput = ()=>{
        setValue({ ...inputValue, [name]: '' });
        closeList();
    };
    const selectItem = (e)=>{
        let inpVal = e.target.getAttribute('value');
        setValue({ ...inputValue, [name]: inpVal });
        closeList();
    };
    let errorMessage = '';
    if(errors[name]){
        rulles ? errorMessage = (rulles[errors[name].type]) : (errorMessage = errors[name].message)
    }
    return (
        <div className="autoCompleteBox" ref={container}>
            <div className={'input' + className}>
                <label>{label}</label>
                <input
                    autoComplete='off'
                    type={type}
                    name={name}
                    defaultValue={inputValue[name]}
                    onFocus={handlerOnFocus}
                    ref={ref}
                />
                <ErrorMessage error={errorMessage}/>
            </div>
            <div className="controls">
                <div className="delete" onClick={clearInput}>
                    <svg height="20" width="20" viewBox="0 0 20 20" enableBackground="0 0 20 20" className="icon">
                        <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"/>
                    </svg>
                </div>
                <div className="open" onClick={openList}>
                    <svg height="20" width="20" viewBox="0 0 20 20" enableBackground="0 0 20 20" className="icon">
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"/>
                    </svg>
                </div>
            </div>
            <div className="completeList">
                <ul>
                    {itemList.map((address) =>
                        <li key={address} value={address} onClick={selectItem}>
                            {address}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
});
export default InputAutocomplete;