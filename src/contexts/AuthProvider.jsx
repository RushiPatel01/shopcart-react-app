import React, { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app"; // Import initializeApp
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import firebaseConfig from "../firebase/firebase.config"; // Import your Firebase configuration

export const AuthContext = createContext();

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Pass the app instance to getAuth
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //create user using gmail
  const signUpWithGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout function
  const logout = () => {
    return signOut(auth);
  };

  //user is available or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [auth]); // Add auth as dependency to useEffect

  const authInfo = {
    user,
    loading,
    createUser,
    signUpWithGmail,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
