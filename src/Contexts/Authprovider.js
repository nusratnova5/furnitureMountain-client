import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContext=createContext();
const auth = getAuth(app)

const Authprovider = ({children}) => {
    const [user,setUser] = useState({});
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
     }
     const LogIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogIn=(provider)=>{
        return signInWithPopup(auth,provider);
     }
    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo);
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
     }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
         
       //   console.log(currentUser);
         setUser(currentUser);
         setLoading(false)
        })
        return ()=>{
         unsubscribe();
        }
     },[])

    const authInfo={createUser,LogIn,user,logOut,updateUser,loading,googleLogIn}
    return (
        <AuthContext.Provider value ={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;