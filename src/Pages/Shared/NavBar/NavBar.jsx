import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const NavBar = () => {

    const {user, logOut} = useAuth();

    const handleLogOut = () => {
        logOut()
        .then(() => { })
        .catch(error => console.log(error));
    }


    return (
        <div className="bg-base-100  shadow-lg">
            <div className="navbar max-w-[1350px] mx-auto sticky py-6">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">TaskFlow</Link>
                </div>
                <div className="flex-none">

                    
                <div className="dropdown dropdown-end">
                    {
                        user? <>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><Link>
                                        <button className="btn" onClick={handleLogOut}>Log Out</button>
                                    </Link></li>
                                </ul>
                        </> :<>

                            <Link to='signup'>
                                <button className="btn">Sign Up</button>
                            </Link>
                            <Link to='login'>
                                <button className="btn">Login</button>
                            </Link>
                        </>
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default NavBar;