import React, { FC, useEffect } from "react";
import style from "./SerialsBoard.module.css";
import img from "../../assets/images/300x450.webp";
import { useLazyGetFilmQuery } from "../../store/KinopoiskApiUnofficial/KAU.api";
import { useAppSelector } from "../../hooks/redux";
import { UseActions } from "../../hooks/actions";
import SerialSeasons from "../SerialSeasons/SerialSeasons";
interface Iprops {
  kid: number;
}

const CardSerial: FC<Iprops> = ({ kid }) => {
  const [load, { isLoading, data }] = useLazyGetFilmQuery();
  const { removeFavorite } = UseActions();

  useEffect(() => {
    load(kid);
  }, []);
  console.log(data);

  const removeFilm = (event: React.MouseEvent<HTMLButtonElement>) => {
    removeFavorite(kid);
  };

  return (
    <div className={style.card}>
      <button className={style.removeBtn} onClick={removeFilm}></button>
      <img src={data?.posterUrlPreview} alt="" />
      <span>{data?.nameRu}</span>
      {data?.kinopoiskId ? <SerialSeasons kid={data.kinopoiskId} /> : null}
    </div>
  );
};

export default CardSerial;
