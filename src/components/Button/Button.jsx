import React from 'react';



export const Button = ({ text, style  }) => {
    return (
        <button className={`${style}`}>
            {text}
        </button>
    );
}
export default Button;



