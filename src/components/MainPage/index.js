import React, { useState } from 'react';

import { TextPanel }  from '../TextPanel';
import { TodoList }  from '../TodoList';

export function MainPage () {
    const [todos, setTodos] = useState([]);

    const handleChange = (value) => {
        setTodos(todos => [...todos, value]);
    };

    const handleDelete = (todoIndex) => {
        const newTodos = todos.filter((_, index) => index !== todoIndex);
        setTodos(newTodos);
    }

    return (
        <div>
            <TodoList todos={todos} deleteTodo={handleDelete} />
            <TextPanel onChange={handleChange} />
        </div>
    );
}