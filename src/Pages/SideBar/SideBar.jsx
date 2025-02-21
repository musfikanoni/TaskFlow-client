
import { FaRegCircleUser } from 'react-icons/fa6';
import { NavLink} from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="flex">
        {/* Dashboard sidebar */}
        {/* <NavBar></NavBar> */}
        <div className="w-72 min-h-screen mt-20 bg-emerald-500">
            <ul className="">
                {/* <li>
                    <Link to="/">
                        <div className="flex gap-3 items-center pb-5 p-7">
                            <img className="h-12 bg-white rounded-full" src={logo} alt="" />
                            <h3 className="text-3xl text-white font-bold">Adoptopia</h3>
                        </div>
                    </Link>
                </li> */}

                {/* <div className="flex flex-wrap pt-10 justify-center gap-2">
                    <Avatar img="photo" rounded size="lg" bordered />
                </div>
                <div className="py-5">
                    <h3 className="text-xl text-white text-center font-semibold">{name}</h3>
                    <p class.Name="text-center text-gray-100">{email}</p>
                </div> */}

                

                {/* {isAdmin ? (
                    <> */}
                  
                        <NavLink to="/">
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
                        {/* <NavLink to="/dashboard/users">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                    }`}
                                >
                                    <FaUsers className="text-3xl" />
                                    <span>Users</span>
                                </li>
                            )}
                        </NavLink>

                        <NavLink to="/dashboard/allPets">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                    }`}
                                >
                                    <LuCat className="text-2xl" />
                                    <span>All Pets</span>
                                </li>
                            )}
                        </NavLink>

                        <NavLink to="/dashboard/allDonations">
                            {({ isActive }) => (
                                <li
                                    className={`flex items-center gap-3 px-7 py-2 ${
                                        isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                    }`}
                                >
                                    <FaHandHoldingUsd className="text-3xl" />
                                    <span>All Donations</span>
                                </li>
                            )}
                        </NavLink>
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