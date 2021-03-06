import React, {useRef, useState} from 'react';

const Input = ({svg, labelClass, labelFor, error, hasError, placeholder, ...rest}) => {
    const inptRef = useRef()
    return (
        <div
             data-scroll
             className="input-icons">
            <img src={svg} className="icon"/>
            <input
                id={labelFor}
                ref={inptRef}
                {...rest}
                className={'input input-field'}/>
            <label onClick={() => {
                inptRef.current.focus()
            }}
                   className={labelClass}
                   htmlFor={labelFor}>
                {placeholder}
            </label>
            {hasError && <p className={'form-error'}>{error}</p>}
        </div>


    );
};

export default Input;