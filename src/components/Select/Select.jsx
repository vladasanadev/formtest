import React, {useState} from 'react';

const Select = ({data,svg,hasError,error,defaultValue, ...rest}) => {
    const [title, setTitle] = useState()

    return (
        <div
            data-scroll
            className={'select-icons'}>
            <img src={svg} className="icon"/>
            <select

                className={'input input-field'}
                  {...rest}>
                <option value={""} selected hidden>Countries</option>
                {
                    data && data.map(i =>
                        <option>{i.name}</option>
                    )}
            </select>
            {hasError && <p className={'form-error'}>{error}</p>}

        </div>
    );
};

export default Select;