import React from 'react';
import './index.css';

export function TodoList(props) {

    return(
        <ul>
                {
                    props.todos.map((todo, index) => 
                        <li key={index}>
                            <input type="checkbox" />
                                {todo}
                            <button type="button" onClick={() => props.deleteTodo(index)}>
                                Delete
                            </button>
                        </li>
                    )
                }
        </ul>
    )
}