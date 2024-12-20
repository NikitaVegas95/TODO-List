import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo: React.FC = () => {
    const [newTodo, setNewTodo] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo(''); // Очистить поле после добавления
        }
    };

    return (
        <form onSubmit={handleAddTodo} className="add-todo-form">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Добавьте новую задачу..."
                className="add-todo-input"
            />
            <button type="submit" className="add-todo-button">
                Добавить
            </button>
        </form>
    );
};

export default AddTodo;