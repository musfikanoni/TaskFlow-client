import { Outlet } from "react-router-dom";
import SideBar from "../Pages/SideBar/SideBar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Login from "../Pages/Login/Login";



const AllDasboard = () => {
    const {user} = useContext(AuthContext);

    return (
     <div className=""> 
        {
            user ? <>
                <div className="flex gap-20 px-2 lg:px-0 mr-20">
                    <SideBar />
                    <Outlet />
                </div>
            </> : <>
                <div className="flex justify-center">
                <h2 className="text-center lg:text-3xl md:text-2xl text-xl font-bold z-0 absolute pt-10">
                    You can not visit this app without login, Please Login</h2>
                </div>
                <Login></Login>
            </>
        }

     </div>
    );
};

export default AllDasboard;