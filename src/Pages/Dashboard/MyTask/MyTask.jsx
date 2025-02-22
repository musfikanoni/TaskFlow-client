import useTask from "../../../hooks/useTask";
import TaskCard from "../../Shared/TaskCard/TaskCard";

const MyTask = () => {
    const[taskList] = useTask();
    
    return (
        <div>
            My All Task
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                {
                    taskList.map(task => <TaskCard
                    key={task._id}
                    task={task}
                    ></TaskCard>)
                }
            </div>
        </div>
    );
};

export default MyTask;