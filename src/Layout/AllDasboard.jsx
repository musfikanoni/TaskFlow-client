import { Outlet } from "react-router-dom";
import SideBar from "../Pages/SideBar/SideBar";



const AllDasboard = () => {
    return (
     <div className="red">
        <div className="flex gap-20 px-2 lg:px-0 mr-20">
        {/* <div className="hidden lg:block"> */}
            <SideBar />
        {/* </div> */}
        <Outlet />
        </div>
     </div>
    );
};

export default AllDasboard;