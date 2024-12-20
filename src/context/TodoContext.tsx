import React, { createContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'; // Импортируем хук

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoContextType {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Используем хук для работы с localStorage
    const [todos, setTodos] = useLocalStorage('todos', []);

    const addTodo = (text: string) => {
        // Проверяем, есть ли уже такая задача
        const isDuplicate = todos.some((todo) => todo.text.toLowerCase() === text.toLowerCase());

        if (isDuplicate) {
            alert('Такая задача уже существует!');
            return;
        }

        setTodos([
            ...todos,
            { id: Date.now(), text, completed: false }
        ]);
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};