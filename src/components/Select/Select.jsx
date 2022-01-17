import React, {useState} from 'react';

const Select = ({data,svg,defaultValue, ...rest}) => {
    console.log(rest)
    const [title, setTitle] = useState()

    return (
        <div className={'select-icons'}>
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

        </div>
    );
};

export default Select;