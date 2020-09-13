import React from 'react';

const TextInput = (props) => {

    const {name, className, label, placeholder, onChange} = props;

    return (
        <div className={`${className}item`}>
            <label htmlFor={name}>{label}</label>
            <input name={name} placeholder={placeholder} onChange={onChange} type="text" className={`${className}`} />
        </div>
    );

};

export default TextInput;