import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';

import { TextPanel }  from '../TextPanel';
import { TodoList }  from '../TodoList';

const styles = {
    layout: {
        padding: 20,
        margin: "auto",
        textAlign: "center",
        width: 500
    }, 
  };

export function MainPage () {
    const [todos, setTodos] = useState([]);

    const handleChange = (value) => {
        if (value !== '') {
            setTodos(todos => [...todos, { 
                id: uuidv4(),
                text: value,
                isChecked: false,
            }]);
        }
    };

    const handleDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const handleToggle = (id) => {
        const newTodos = todos.map(todo => { 
            if (todo.id === id) {
              todo.isChecked = !todo.isChecked;
            }
            return todo;
          });
        setTodos(newTodos);
    }

    return (
        <Grid container spacing={0} style={styles.layout}>
            <Grid item xs={12}>
                <TextPanel onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
                {todos.length > 0 && 
                    <TodoList todos={todos} deleteTodo={handleDelete} toggle={handleToggle} />
                }
            </Grid>
        </Grid>
    );
}