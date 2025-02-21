import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <div className="flex justify-center mt-72">
            <span className="loading loading-ring text-success loading-xl"></span>
        </div>
    }
    
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;