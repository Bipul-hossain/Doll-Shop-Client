import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../FireBaseConfig/firebase.config";

export const UserAuthProviderContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProviderContext = ({ children }) => {
  const [loginUserInfo, setLoginUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscript = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginUserInfo(user);
      }
      setLoading(false);
    });
    return () => unSubscript();
  }, []);

  //   Google Login
  const handleSignWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setLoginUserInfo(result.user);
        fetch("http://localhost:5000/api/user", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("SuccessFully Google Login");
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  //   Sign Out
  const signOutFun = () => {
    signOut(auth)
      .then(() => {
        setLoginUserInfo(null);
        alert("Successfully Sign Out");
      })
      .catch();
  };

  const userData = {
    loginUserInfo,
    setLoginUserInfo,
    handleSignWithGoogle,
    signOutFun,
    loading,
    setLoading,
  };
  return (
    <UserAuthProviderContext value={userData}>
      {children}
    </UserAuthProviderContext>
  );
};

export default AuthProviderContext;
