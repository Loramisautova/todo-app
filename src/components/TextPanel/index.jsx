import React, { useState } from 'react';
import { Box, TextField, Button } from "@material-ui/core";

export function TextPanel (props) {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        props.onSubmit(value);
        setValue('');
    };  

    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
           <TextField 
                id="standard-basic" 
                label="Task" 
                value={value} 
                onChange={onChange} 
                fullWidth
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary" 
                onClick={handleSubmit}
            >
                Add
            </Button>
        </Box>
    );  
}