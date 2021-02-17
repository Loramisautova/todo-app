import React, { useState } from 'react';

export function TextPanel (props) {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        props.onChange(value);
        setValue('');
    };  

    return (
        <div>
        <input 
            type="text" 
            value={value} 
            onChange={onChange} 
        />
        <button 
            onClick={handleSubmit}> 
                Submit 
        </button> 
        </div>
    );  
}