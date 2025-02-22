
import useTask from "../../../hooks/useTask";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
    const[taskList] = useTask();
    const todoTask = taskList.filter(task => task.category === 'To Do');

    return (
        <div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                {
                    todoTask.map(task => <TaskCard
                    key={task._id}
                    task={task}
                    ></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskList;