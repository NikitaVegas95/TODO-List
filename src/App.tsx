import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Filters from './components/Filters';
// import useLocalStorage from "./hooks/useLocalStorage.ts";
import {useState} from "react";
import {ITask} from "./types/types.ts";

const App = () => {
    const [tasks, setTasks] = useState<ITask[] | []>([]);
    const [filter, setFilter] = useState<string>('all');

    // const [tasks, setTasks] = useLocalStorage('tasks', []); // Ключ 'tasks' в localStorage
    // const [filter, setFilter] = useLocalStorage('filter', 'all'); // Храним выбранный фильтр


    return (
        <div className="app">
            <Header title='TODO List' />
            <TaskInput tasks={tasks} setTasks={setTasks} />
            <Filters filter={filter} setFilter={setFilter} />
            <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />
        </div>
    );
};

export default App;