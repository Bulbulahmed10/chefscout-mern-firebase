import { createContext, useEffect, useState } from "react";
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
import { setUserRole } from "../utils/user/fetchUserRole";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleSignIn = async () => {
    setLoading(true);
    await signInWithPopup(auth, googleProvider);
    return auth.currentUser;
  };

  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const createUser = async (email, password) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    const userRole = await setUserRole({
      email: auth.currentUser.email,
      role: "user",
      uid: auth.currentUser.uid,
      name: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL,
    });
    return auth.currentUser;
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser && currentUser.email) {
        const jwtUserInfo = { email: currentUser.email };
        fetch("http://localhost:4000/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(jwtUserInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("chefscout-access-token", data.token);
          });
      } else {
        localStorage.removeItem("chefscout-access-token");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const updateUser = (userName, userPhotoUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhotoUrl,
    });
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    googleSignIn,
    githubSignIn,
    createUser,
    updateUser,
    signInUser,
    loading,
    logOutUser,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
