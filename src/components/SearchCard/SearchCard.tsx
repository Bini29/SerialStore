import { addDoc, collection } from "firebase/firestore";
import React, { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { IFilm } from "../../Models/Models";
import style from "./SearchCard.module.css";

const SearchCard: FC<IFilm> = (props) => {
  const [user] = useAuthState(auth);

  const saveSerial = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (user) {
      await addDoc(collection(db, user?.uid), {
        filmId: props.filmId,
        name: props.nameRu ? props.nameRu : props.nameEn,
        poster: props.posterUrl,
        season: 0,
        seasonTotal: 0,
        type: props.type,
      });
    }
  };

  return (
    <div className={[style.card, "themeSerchCard"].join(" ")}>
      <span>{props.nameRu ? props.nameRu : props.nameEn}</span>{" "}
      <button onClick={saveSerial}></button>
    </div>
  );
};

export default SearchCard;
