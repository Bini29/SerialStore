import React, { FC } from "react";
import { UseActions } from "../../hooks/actions";
import { IFilm } from "../../Models/Models";
import style from "./SearchCard.module.css";

const SearchCard: FC<IFilm> = (props) => {
  const { addFavorite } = UseActions();

  const saveSerial = (event: React.MouseEvent<HTMLButtonElement>) => {
    addFavorite({ id: props.filmId, season: 0 });
  };

  return (
    <div className={style.card}>
      <span>{props.nameRu}</span> <button onClick={saveSerial}></button>
    </div>
  );
};

export default SearchCard;
