import React from 'react';

const TaskItem = ({ task, tasks, setTasks }) => {
    const toggleCompletion = () => {
        setTasks(
            tasks.map((t) =>
                t.id === task.id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const deleteTask = () => {
        setTasks(tasks.filter((t) => t.id !== task.id));
    };

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={toggleCompletion}
            />
            <span>{task.text}</span>
            <button onClick={deleteTask}>Удалить</button>
        </li>
    );
};

export default TaskItem;