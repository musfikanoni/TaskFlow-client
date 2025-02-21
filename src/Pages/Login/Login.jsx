
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/auth/login.png';
import SocialLogin from '../../SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {signIn} = useAuth();
    const navigate = useNavigate();

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const handleLogin = e => {
        e.preventDefault(); 
    
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        console.log(email, password);
    
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Toast.fire({
                icon: "success",
                title: "Successfully Login"
              });

            navigate('/');

        })
        .catch(error => {
            console.error("Login failed:", error.message);
        });
    };
    

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
                            <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">

                                <label className="fieldset-label">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Email" />

                                <label className="fieldset-label">Password</label>
                                <input type={showPassword ? 'text' : 'password'} name='password' className="input w-full" placeholder="Password" />

                                <span className="btn bg-transparent border-none absolute right-7 mt-24 "
                                    onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye /> :<FaEyeSlash /> 
                                        }
                                        
                                </span>


                                <button className="btn bg-emerald-500 font-bold mt-4">Login</button>
                                </fieldset>
                                <div className="divider">OR</div>
                                <SocialLogin></SocialLogin>
                                <Link to='/signup'>
                                <p className='text text-emerald-500'>Create an account</p>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;