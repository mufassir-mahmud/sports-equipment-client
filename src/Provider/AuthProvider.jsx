import React, { useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import auth from './../Firebase/Firebase.config';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // new loading state

  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);
  const provider = new GoogleAuthProvider();
  const signInGoogle = () => signInWithPopup(auth, provider);
  const updateUser = (updateData) => updateProfile(auth.currentUser, updateData);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // finished loading
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading,
    setUser,
    createUser,
    loginUser,
    updateUser,
    logout,
    signInGoogle
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
