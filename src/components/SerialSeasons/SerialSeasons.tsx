import React, { FC } from "react";
import { UseActions } from "../../hooks/actions";
import { useGetSeasonsQuery } from "../../store/KinopoiskApiUnofficial/KAU.api";
import style from "./SerialSeasons.module.css";
interface IProps {
  kid: number;
  defaultSeason: number;
}

const SerialSeasons: FC<IProps> = ({ kid, defaultSeason }) => {
  const { isLoading, data } = useGetSeasonsQuery(kid, {});
  const { setSeason } = UseActions();
  console.log(data);

  return (
    <div className={style.wrapper}>
      {data?.items.map((i) => (
        <button
          key={i.number}
          // className={style.btn}
          className={
            defaultSeason === i.number
              ? [style.btn, style.btnActive].join(" ")
              : style.btn
          }
          onClick={() => setSeason({ id: kid, season: i.number })}
        >
          {i.number}
        </button>
      ))}
    </div>
  );
};

export default SerialSeasons;
