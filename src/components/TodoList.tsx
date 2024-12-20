import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

interface TodoListProps {
    filter: 'all' | 'active' | 'completed';
}

const TodoList: React.FC<TodoListProps> = ({ filter }) => {
    const { todos } = useContext(TodoContext);

    // Фильтрация задач в зависимости от маршрута
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true; // все задачи
    });

    return (
        <div className="todo-list">
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;