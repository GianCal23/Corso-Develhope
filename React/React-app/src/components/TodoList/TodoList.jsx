import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleRemoveTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const handleResetTodos = () => {
        setTodos([]);
    };

    return (
        <div>
            <h1>Todo List</h1>

            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add a new todo"
                />
                <button onClick={handleAddTodo}>Add Todo</button>
                <button onClick={handleResetTodos}>Reset</button>
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;