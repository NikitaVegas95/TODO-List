import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

interface TodoItemProps {
    todo: {
        id: number;
        text: string;
        completed: boolean;
    };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const { toggleTodo, deleteTodo } = useContext(TodoContext);

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
        </div>
    );
};

export default TodoItem;