/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.init";
// import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    // const axiosPublic = useAxiosPublic();

    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login user
    const signIn = (email, password) => {
        setLoading();
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google signIn
    const goolgeSignIn = () => {
        setLoading();
        return signInWithPopup(auth, googleProvider);
    }

    //logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //update profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured', currentUser);
            setLoading(false);
        })
        return () => {
            unsubscriber();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        goolgeSignIn,
        logOut,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;