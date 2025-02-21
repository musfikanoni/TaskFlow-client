import { Link, useNavigate } from 'react-router-dom';
import signup from '../../assets/auth/signup.png';
import { useForm } from "react-hook-form"
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,reset,
        formState: { errors },
      } = useForm();

      const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                const userInfo = {
                    name: data.name,
                    email: data.email,
                    photoURL: data.photoURL
                }
                console.log(userInfo)
                // axiosPublic.post('/users', userInfo)
                .then(res =>{
                    if(res.data.insertedId){
                        console.log('user added')
                        reset();
                        Swal.fire({
                            title: "Sign Up Successful",
                            icon: "success",
                            showClass: {
                                popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                                `
                            },
                            hideClass: {
                                popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                                `
                            }
                        });
                    }
                    navigate('/');
                })
                
            })
            .catch(error => console.log(error));
        })
    }

    return (
                <div>
                   <div className="hero bg-base-200 min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                            
                                <img src={signup} alt="" />
                            </div>
                            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                                <div className="card-body">
                                <h2 className='text-center md:text-3xl font-bold'>Sign Up</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <fieldset className="fieldset">
                                            {/* photoURL */}
                                            <label className="fieldset-label">Choose Photo</label>
                                            <input type="file" className="file-input file-input-success w-full"
                                            {...register("image", { required: true })} />
                                            {errors.image && <span className="text-red-600">Image is required</span>} 

                                            {/* name */}
                                            <label className="fieldset-label">Name</label>
                                            <input type="name"  className="input w-full" placeholder="Name"
                                            {...register("name", { required: true })} />
                                            {errors.name && <span className="text-red-600">email is required</span>}

                                            {/* email */}
                                            <label className="fieldset-label">Email</label>
                                            <input type="email" className="input w-full" placeholder="Email" 
                                            {...register("email", { required: true })} />
                                            {errors.email && <span className="text-red-600">email is required</span>}

                                            {/* password */}
                                            <div>
                                                <label className="fieldset-label">Password</label>
                                                <input type={showPassword? 'text' : 'password'} className="input w-full" placeholder="Password"
                                                {...register("password", { required: true,  minLength: 6, 
                                                    maxLength: 20,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])/ })} />
                                                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                                    {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less 20 characters</span>}
                                                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password must one uppercase, one lowercase, one number, one special character</span>}
                                                    <span className="btn bg-transparent border-none absolute right-8 "
                                                        onClick={() => setShowPassword(!showPassword)}>
                                                            {
                                                                showPassword ? <FaEye /> :<FaEyeSlash /> 
                                                            }
                                                            
                                                    </span>
                                            </div>

                                        <button className="btn bg-emerald-500 font-bold mt-4">Sign Up</button>
                                        </fieldset>
                                        <div className="divider">OR</div>
                                        <button className="btn w-full bg-emerald-500 font-bold">Continue with Google</button>
                                        <Link to='/login'>
                                            <p className='pt-2 text-emerald-500'>Go to Login</p>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default SignUp;