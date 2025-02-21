
import { FaTasks } from 'react-icons/fa';
import { FaRegCircleUser} from 'react-icons/fa6';
import { IoTimeOutline } from 'react-icons/io5';
import { LuClipboardCheck, LuClipboardPen } from 'react-icons/lu';
import { NavLink} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SideBar = () => {

    const {user} = useAuth();
    const name = user.displayName;
    // const photo = user.photoURL;
    const email = user.email;

    return (
        <div className="flex">
        {/* Dashboard sidebar */}
        {/* <NavBar></NavBar> */}
        <div className="w-72 min-h-screen mt-16 bg-emerald-500">
            <ul className="">
                {/* <li>
                    <Link to="/">
                        <div className="flex gap-3 items-center pb-5 p-7">
                            <img className="h-12 bg-white rounded-full" src={logo} alt="" />
                            <h3 className="text-3xl text-white font-bold">Adoptopia</h3>
                        </div>
                    </Link>
                </li> */}

                <div className="flex flex-wrap justify-center gap-2">
                <div className="avatar -mt-14">
                    <div className="ring-primary ring-offset-base-100 w-32 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                </div>
                <div className="py-5">
                    <h3 className="text-xl text-white text-center font-semibold">{name}</h3>
                    <p className="text-center text-gray-100">{email}</p>
                </div>

                

                {/* {isAdmin ? (
                    <> */}
                  
                        <NavLink to="/profile">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-300 font-bold' : 'text-white'
                                    }`}
                                >
                                    <FaRegCircleUser className="text-3xl" />
                                    <span>Profile</span>
                                </li>
                            )}
                        </NavLink>
                        <NavLink to="/mytask">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-300 font-bold' : 'text-white'
                                    }`}
                                >
                                    <FaTasks className="text-3xl" />
                                    <span>My Task</span>
                                </li>
                            )}
                        </NavLink>

                        <NavLink to="/todo">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-300 font-bold' : 'text-white'
                                    }`}
                                >
                                    <LuClipboardPen className="text-2xl" />
                                    <span>To Do</span>
                                </li>
                            )}
                        </NavLink>

                        <NavLink to="/inprogress">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-300 font-bold' : 'text-white'
                                    }`}
                                >
                                    <IoTimeOutline className="text-3xl" />
                                    <span>In Progress</span>
                                </li>
                            )}
                        </NavLink>
                         <NavLink to="/completetask">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-300 font-bold' : 'text-white'
                                    }`}
                                >
                                    <LuClipboardCheck className="text-3xl" />
                                    <span>Complete Task</span>
                                </li>
                            )}
                        </NavLink>
                         {/*
                    </>
                    
                ) : (
                    <>
                        <NavLink to="/dashboard/profile">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                    }`}
                                >
                                    <FaRegCircleUser className="text-3xl" />
                                    <span>Profile</span>
                                </li>
                            )}
                        </NavLink>
                        <NavLink to="/dashboard/addPet">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                    }`}
                                >
                                    <MdAssignmentAdd className="text-2xl" />
                                    <span>Add a pet</span>
                                </li>
                            )}
                        </NavLink>

                        <NavLink to="/dashboard/myAddedPets">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                    }`}
                                >
                                    <RiFunctionAddLine className="text-2xl" />
                                    <span>My added pets</span>
                                </li>
                            )}
                        </NavLink>

                        <NavLink to="/dashboard/adoptionRequest">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                    }`}
                                >
                                    <VscGitPullRequestNewChanges className="text-2xl" />
                                    <span>Adoption Request</span>
                                </li>
                            )}
                        </NavLink>

                        <NavLink to="/dashboard/createDonation">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                    }`}
                                >
                                    <IoCreateOutline className="text-2xl" />
                                    <span>Create Donation Campaign</span>
                                </li>
                            )}
                        </NavLink>

                        <NavLink to="/dashboard/myDonationCamp">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                    }`}
                                >
                                    <FaHandHoldingUsd className="text-2xl" />
                                    <span>My Donation Campaigns</span>
                                </li>
                            )}
                        </NavLink>

                        <NavLink to="/dashboard/myDonations">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                    }`}
                                >
                                    <PiMoney className="text-2xl" />
                                    <span>My Donations</span>
                                </li>
                            )}
                        </NavLink>
                    </>
                )} */}
            </ul>
        </div>
        {/* Dashboard content */}
  
    </div>
    );
};

export default SideBar;