import React from 'react';



export const Button = ({ text, style  }) => {
    return (
        <button className={`btn ${style}`}>
            {text}
        </button>
    );
}
export default Button;



