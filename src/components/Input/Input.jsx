import React, {useRef, useState} from 'react';

const Input = ({svg, labelClass, labelFor, error, hasError, placeholder, ...rest}) => {
    // const [autoFoc, setAutoFoc] = useState(false);
    const inptRef = useRef()
    return (

        <div id={labelFor}
             className="input-icons">
            <img src={svg} className="icon"/>
            <input
                ref={inptRef}
                {...rest}
                // onBlur={() => {
                //     console.log("blurr")
                //     setAutoFoc(false)
                // }}
                // autoFocus={autoFoc}
                className={'input input-field'}/>
            <label onClick={() => {
                // setAutoFoc(true)
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