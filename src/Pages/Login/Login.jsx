
import { Link } from 'react-router-dom';
import login from '../../assets/auth/login.png';
import SocialLogin from '../../SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    
                        <img src={login} alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <div className="card-body">
                        <h2 className='text-center md:text-3xl font-bold'>Welcome Back!</h2>
                            <fieldset className="fieldset">

                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" />

                                <label className="fieldset-label">Password</label>
                                <input type={showPassword ? 'text' : 'password'} className="input w-full" placeholder="Password" />
                   
                                <button className="btn bg-transparent absolute right-7 mt-24 border-none"
                                    onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye /> :<FaEyeSlash /> 
                                        }
                                        
                                </button>
                               
                        
                            <button className="btn bg-emerald-500 font-bold mt-4">Login</button>
                            </fieldset>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                            <Link to='/signup'>
                                <p className='text text-emerald-500'>Create an account</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;