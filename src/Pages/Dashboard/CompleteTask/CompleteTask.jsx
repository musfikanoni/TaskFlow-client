import useTask from "../../../hooks/useTask";
import TaskCard from "../../Shared/TaskCard/TaskCard";

const CompleteTask = () => {
    const[taskList] = useTask();
    const todoTask = taskList.filter(task => task.category === 'Done');

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

export default CompleteTask;