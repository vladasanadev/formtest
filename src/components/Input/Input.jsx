import React from 'react';

const Input = ({ svg,labelFor,placeholder, ...rest}) => {
    return (
         <div id={labelFor}
                  className="input-icons">
            <img src={svg} className="icon"/>
            <input {...rest} className={'input input-field'}/>
             <label className={'label'} htmlFor={labelFor}>{placeholder}</label>
        </div>

    );
};

export default Input;