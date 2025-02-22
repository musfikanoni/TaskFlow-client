import useTask from "../../../hooks/useTask";
import TaskCard from "../../Shared/TaskCard/TaskCard";

const MyTask = () => {
    const[taskList, ] = useTask();
    
    return (
        <div>
           <h2 className="md:text-3xl text-xl font-bold pt-20">My All Task</h2>
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