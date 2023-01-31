import { doc, updateDoc } from "firebase/firestore";
import React, { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useGetSeasonsQuery } from "../../store/KinopoiskApiUnofficial/KAU.api";
import style from "./SerialSeasons.module.css";

interface IProps {
  kid: number;
  defaultSeason: number;
  id: string;
}

const SerialSeasons: FC<IProps> = ({ kid, defaultSeason, id }) => {
  const { data } = useGetSeasonsQuery(kid, {});

  const [user] = useAuthState(auth);

  const setSeasonFirebase = async (num: number) => {
    if (user) {
      await updateDoc(doc(db, user.uid, id), {
        season: num,
      });
    }
  };

  return (
    <div className={style.wrapper}>
      {data?.items.map((i) => (
        <button
          key={i.number}
          className={
            defaultSeason === i.number
              ? [style.btn, style.btnActive].join(" ")
              : style.btn
          }
          onClick={() => setSeasonFirebase(i.number)}
        >
          {i.number}
        </button>
      ))}
    </div>
  );
};

export default SerialSeasons;
