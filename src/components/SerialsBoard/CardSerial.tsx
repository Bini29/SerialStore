import React, { FC, useEffect } from "react";
import style from "./SerialsBoard.module.css";
import img from "../../assets/images/300x450.webp";
import { useLazyGetFilmQuery } from "../../store/KinopoiskApiUnofficial/KAU.api";
import { useAppSelector } from "../../hooks/redux";
import { UseActions } from "../../hooks/actions";
import SerialSeasons from "../SerialSeasons/SerialSeasons";
interface Iprops {
  kid: number;
  season: number;
}

const CardSerial: FC<Iprops> = ({ kid, season }) => {
  const [load, { isLoading, data }] = useLazyGetFilmQuery();
  const { removeFavorite } = UseActions();

  useEffect(() => {
    load(kid);
  }, []);
  console.log(data);

  const removeFilm = (event: React.MouseEvent<HTMLButtonElement>) => {
    removeFavorite({ id: kid, season: 0 });
  };

  return (
    <div className={style.card}>
      {data?.serial ? <span className={style.season}>{season}</span> : null}
      <button className={style.removeBtn} onClick={removeFilm}></button>
      <img src={data?.posterUrlPreview} alt="" />
      <span className={style.title}>{data?.nameRu}</span>
      <div className={style.sesonbtnwrapper}>
        {data?.serial ? (
          <SerialSeasons kid={data.kinopoiskId} defaultSeason={season} />
        ) : null}
      </div>
    </div>
  );
};

export default CardSerial;
