import { Helmet } from "react-helmet-async";
import useTask from "../../../hooks/useTask";


const Profile = () => {
    const [task] = useTask();
    return (
        <div className="mt-20">
            <Helmet>
                <title>My Profile | TaskFlow</title>
            </Helmet>
            <h2 className="text-5xl">profile {task.length}</h2>
        </div>
    );
};

export default Profile;