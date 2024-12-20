import React, { useState } from 'react';

const TaskInput = ({ tasks, setTasks }) => {
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
            setTask('');
        }
    };

    return (
        <div className="task-input">
            <input
                type="text"
                placeholder="Введите задачу..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Добавить</button>
        </div>
    );
};

export default TaskInput;