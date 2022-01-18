import React from 'react';



export const Button = ({ text, style,...rest  }) => {
    return (
        <button className={`${style}`}
                {...rest}
        >
            {text}
        </button>
    );
}
export default Button;



