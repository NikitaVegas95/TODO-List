import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Filters from './components/Filters';
// import useLocalStorage from "./hooks/useLocalStorage.ts";
import {useState} from "react";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

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