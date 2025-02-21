import { Helmet } from "react-helmet-async";


const Profile = () => {
    return (
        <div className="mt-20">
            <Helmet>
                <title>My Profile | TaskFlow</title>
            </Helmet>
            <h2 className="text-5xl">profile</h2>
        </div>
    );
};

export default Profile;