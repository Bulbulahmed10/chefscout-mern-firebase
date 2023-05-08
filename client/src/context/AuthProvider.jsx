import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  
  
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  /* const googleSignIn = async() => {

    setLoading(true);
    await signInWithPopup(auth, googleProvider);
    
    return auth.currentUser
  }; */
/* 
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }; */

  const createUser =async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const updateUser = (userName, userPhotoUrl) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhotoUrl,
    });
  };

  const getUserId = () => {
    getAuth().getUser
  
  }

  const logOutUser = () => {
    return signOut(auth)
  }

  const authInfo = {
    user,
    setUser,
    // googleSignIn,
    // githubSignIn,
    createUser,
    updateUser,
    signInUser,
    loading,
    logOutUser,
    setLoading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
