import { Link, useNavigate } from 'react-router-dom';
import signup from '../../assets/auth/signup.png';
import { useForm } from "react-hook-form"
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../SocialLogin/SocialLogin';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,reset,
        formState: { errors },
      } = useForm();

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

          const onSubmit = async (data) => {
            console.log(data);
        
            if (!data.image || data.image.length === 0) {
                console.error("No image selected");
                return;
            }
        
            const imageFile = new FormData();
            imageFile.append("image", data.image[0]);
        
            try {
      
                const res = await axiosPublic.post(image_hosting_api, imageFile, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
        
                if (res.data.success) {
                    // Create user
                    const createdUser = await createUser(data.email, data.password);
                    console.log(createdUser);
        
                    // Update user profile
                    await updateUserProfile(data.name, res.data.data.display_url);
        
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                        photoURL: res.data.data.display_url 
                    };
        
                
                    const response = await axiosPublic.post('/users', userInfo);
        
                    if (response.data.insertedId) {
                        console.log('User added to database');
                        reset();
                        Toast.fire({
                            icon: "success",
                            title: "Successfully Signed Up"
                        });
        
                        navigate('/');
                    }
                } else {
                    console.error("Image upload failed");
                }
            } catch (error) {
                console.error("Error during signup:", error);
            }
        };
        
        

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
                                            <input type="file" {...register("image", { required: true })} className="file-input file-input-success w-full"
                                            {...register("image")} />
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
                                       <SocialLogin></SocialLogin>
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