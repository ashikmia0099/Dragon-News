import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



const auth = getAuth(app);

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(loading, user)
    

    // create new user ar jonno

    const createNewUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log out

    const LogOut = () => {
        setLoading(true);

        return signOut(auth);
        
    }

    //  user Login

    const userLogin = (email, password) =>{
        setLoading(true);

        return signInWithEmailAndPassword(auth,email, password );
        
    }


    const authInfo = {
        user,
        setUser,
        createNewUser,
        LogOut,
        userLogin,
        loading,
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            unSubscribe();
        }

    },[]);

    


    return (
        <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
    );
};

export default AuthProvider;