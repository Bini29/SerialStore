import React from "react";
import { useAppSelector } from "../../hooks/redux";
import style from "./Profile.module.css";
import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { UseActions } from "../../hooks/actions";
import { useAuthState } from "react-firebase-hooks/auth";
import googleSvg from "../../assets/svg/icons8-google.svg";

const Profile = () => {
  const auth = getAuth();
  const { setUser } = UseActions();

  const [user, loading] = useAuthState(auth);
  console.log(loading);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    setUser(user as any);
  };

  if (loading) {
    return null;
  }
  return (
    <div className={style.userContainer}>
      {user ? (
        <>
          <button className={style.auth} onClick={() => auth.signOut()}>
            Выйти
          </button>
          {user.photoURL ? (
            <img className={style.avatar} src={user.photoURL} alt="" />
          ) : null}
        </>
      ) : (
        <button className={style.authgoogle} onClick={login}>
          Войти <img src={googleSvg} alt="" />
        </button>
      )}
    </div>
  );
};

export default Profile;
