import React from 'react';
import { IconButton, Card, Divider, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
    done: {
        textDecoration: "line-through",
        opacity: ".5",
        display: "flex",
        width: "100%"
    },
    label: {
        display: "flex",
        width: "100%"
    },
    card: {
        padding: "20px",
        margin: "20px 0"
    },
    todo: {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    divider: {
        position: "absolute",
        width: "100%",
        top: 0
    }
};
  
export function TodoList(props) {
    const { todos, toggle } = props;

    return(
        <Card style={styles.card}>
            {todos.map((todo, index) => 
                <Box key={todo.id} style={styles.todo}>
                    {index > 0 ? <Divider style={styles.divider} /> : ""}
                    <FormControlLabel
                        control={
                        <Checkbox
                            onChange={() => toggle(todo.id)}
                            checked={todo.isChecked}
                            color="primary"
                        />
                        }
                            label={todo.text}
                            style={todo.isChecked ? styles.done : styles.label}
                    />
                        <IconButton
                            aria-label="delete"
                            onClick={() => props.deleteTodo(todo.id)}
                        >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            )} 
        </Card>
    )
}
