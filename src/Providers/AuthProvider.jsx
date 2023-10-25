import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }



  const authInfo={
    user,
    setUser,
    createUser,
    signIn
  }

  useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setUser(false)
        console.log('current useer',currentUser);
    })
    return ()=>{
        unsubscribe();
    } 
  },[])





    return (
        <AuthContext.Provider value={authInfo} >
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;