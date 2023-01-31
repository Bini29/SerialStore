import React from "react";
import style from "./Profile.module.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import googleSvg from "../../assets/svg/icons8-google.svg";
import { auth } from "../../firebase";
import Loader from "../Loader/Loader";

const Profile = () => {
  const [user, loading] = useAuthState(auth);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  if (loading) {
    return <Loader />;
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
