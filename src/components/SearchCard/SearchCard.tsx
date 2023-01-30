import { addDoc, collection } from "firebase/firestore";
import React, { FC } from "react";
import { db } from "../../firebase";
import { UseActions } from "../../hooks/actions";
import { IFilm } from "../../Models/Models";
import style from "./SearchCard.module.css";

const SearchCard: FC<IFilm> = (props) => {
  const { addFavorite } = UseActions();

  const saveSerial = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // addFavorite({ season: 0, filmId:props.filmId });
    let newFilms = await addDoc(collection(db, "films"), {
      filmId: props.filmId,
      season: 0,
    });
    console.log(newFilms);
  };

  return (
    <div className={[style.card, "themeSerchCard"].join(" ")}>
      <span>{props.nameRu ? props.nameRu : props.nameEn}</span>{" "}
      <button onClick={saveSerial}></button>
    </div>
  );
};

export default SearchCard;
