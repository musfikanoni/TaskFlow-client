
import { FaTasks } from 'react-icons/fa';
import { FaUserLarge} from 'react-icons/fa6';
import { IoTimeOutline } from 'react-icons/io5';
import { LuClipboardCheck, LuClipboardPen } from 'react-icons/lu';
import { NavLink} from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SideBar = () => {

    const {user} = useContext(AuthContext)

    return (
        <div className="flex">
        {/* Dashboard sidebar */}

        <div className="w-72 min-h-screen mt-16 bg-emerald-500">
            <ul className="">

                <div className="flex flex-wrap justify-center gap-2">
                <div className="avatar -mt-14">
                    <div className="ring-emerald-500 ring-offset-base-100 w-32 rounded-full ring ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                </div>
                <div className="py-5">
                    <h3 className="text-xl text-white text-center font-semibold">{user?.displayName}</h3>
                    <p className="text-center text-gray-100">{user?.email}</p>
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
                                    <FaUserLarge className="text-3xl" />
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