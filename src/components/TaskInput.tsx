import {useState} from 'react';
import {ITask} from "../types/types.ts";

interface IProps {
    tasks: ITask[] | [];
    setTasks: (task: ITask[]) => void;
}

const TaskInput = ({ tasks, setTasks }: IProps): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');

    const addTask = () => {
        if (inputValue.trim()) {
            setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    return (
        <div className="task-input">
            <input
                type="text"
                placeholder="Введите задачу..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTask}>Добавить</button>
        </div>
    );
};

export default TaskInput;