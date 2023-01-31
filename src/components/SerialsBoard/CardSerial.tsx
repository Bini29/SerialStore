import React, { FC } from "react";
import style from "./SerialsBoard.module.css";
import SerialSeasons from "../SerialSeasons/SerialSeasons";
import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

import { useAuthState } from "react-firebase-hooks/auth";

interface Iprops {
  name: string;
  season: number;
  poster: string;
  id: string;
  filmId: number;
  type: string;
}

const CardSerial: FC<Iprops> = (props) => {
  const [user] = useAuthState(auth);

  const removeFilm = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (user) {
      await deleteDoc(doc(db, user.uid, props.id));
    }
  };

  return (
    <div className={[style.card, "themeCard"].join(" ")}>
      {props.type === "TV_SERIES" ? (
        <span className={style.season}>{props.season}</span>
      ) : null}
      <button className={style.removeBtn} onClick={removeFilm}></button>
      <img src={props.poster} alt="" />
      <span className={style.title}>{props.name}</span>
      <div className={style.sesonbtnwrapper}>
        {props.type === "TV_SERIES" ? (
          <SerialSeasons
            id={props.id}
            kid={props.filmId}
            defaultSeason={props.season}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CardSerial;
