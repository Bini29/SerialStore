import React, { FC } from "react";
import { UseActions } from "../../hooks/actions";
import { IFilm } from "../../Models/Models";
import { useLazyGetFilmQuery } from "../../store/KinopoiskApiUnofficial/KAU.api";
import style from "./SearchCard.module.css";

const SearchCard: FC<IFilm> = (props) => {
  // const [fetchFilm, { isLoading, data }] = useLazyGetFilmQuery();

  const { addFavorite } = UseActions();

  const saveSerial = (event: React.MouseEvent<HTMLButtonElement>) => {
    addFavorite(props.kinopoiskId);
  };

  return (
    <div className={style.card}>
      <span>{props.nameRu}</span> <button onClick={saveSerial}></button>
    </div>
  );
};

export default SearchCard;
