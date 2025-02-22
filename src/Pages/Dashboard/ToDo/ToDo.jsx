import AddTask from "../../Shared/AddTaskModal/AddTask";
import TaskList from "../../Shared/TaskList/TaskList";


const ToDo = () => {
    return (
        <div className="pt-20">
            <AddTask></AddTask>
            <TaskList></TaskList>
        </div>
    );
};

export default ToDo;