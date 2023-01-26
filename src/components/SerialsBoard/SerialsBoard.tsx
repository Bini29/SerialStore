import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import CardSerial from "./CardSerial";
import style from "./SerialsBoard.module.css";

const SerialsBoard: FC = () => {
  const { favorites } = useAppSelector((state) => state.kinopoisk);

  return (
    <div className={style.board}>
      {favorites?.map((i) => {
        return <CardSerial key={i.id} kid={i.id} season={i.season} />;
      })}
    </div>
  );
};

export default SerialsBoard;
