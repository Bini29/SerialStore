import React, { FC } from "react";
import ligtIcon from "../../assets/svg/darcIcon.svg";
import style from "./Header.module.css";

const Header: FC = () => {
  return (
    <div className={style.header}>
      <h1 className={style.title}>Save The Series</h1>
      <button className={style.button}>
        <img src={ligtIcon} alt="" />
      </button>
    </div>
  );
};

export default Header;
