
// import { useNavigate } from 'react-router-dom';

import useAuth from "../hooks/useAuth";


const SocialLogin = () => {
    const{goolgeSignIn} = useAuth();
    // const axiosPublic = useAxiosPublic();
    // const navigate = useNavigate();

    const handleGoogleSingIn = () => {
        goolgeSignIn()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photoURL: result.user?.photoURL
            }
            console.log(userInfo)
            // axiosPublic.post('/users', userInfo)
            // .then(res =>{
            //     console.log(res.data)
            //     navigate('/')
            // })
        })
    }
    return (
        <div>
            <div>
            <span onClick={handleGoogleSingIn} className='btn w-full flex gap-5 bg-emerald-500 items-center'>
                <img className='h-7' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" /> 
                <span className='text-slate-800 font-bold mt-1'>Continue with Google</span>
            </span>
            {/* <Button  size="lg">Countinue with Google</Button> */}
            </div>
        </div>
    );
};

export default SocialLogin;