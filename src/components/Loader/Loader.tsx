import React, { FC } from "react";
import style from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={style.loaderContainer}>
      <span className={style.loader}></span>
    </div>
  );
};

export default Loader;
