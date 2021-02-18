import React, { useState } from 'react';
import { Grid, TextField, Button } from "@material-ui/core";

const styles = {
    header: {
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
  };

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
        <Grid style={styles.header}>
           <TextField 
                id="standard-basic" 
                label="Task" 
                value={value} 
                onChange={onChange} 
                style={{ width: "100%" }}
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary" 
                onClick={handleSubmit}
            >
                Add
            </Button>
        </Grid>
    );  
}