import TaskItem from './TaskItem';
import {ITask} from "../types/types.ts";

interface IProps {
    tasks: ITask[] | []
    setTasks: (tasks: ITask[]) => void
    filter: string;
}

const TaskList = ({ tasks, setTasks, filter }: IProps) => {

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'active') return !task.completed;
        return true;
    });

    return (
        <ul className="task-list">
            {filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
            ))}
        </ul>
    );
};

export default TaskList;