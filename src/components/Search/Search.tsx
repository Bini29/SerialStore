import React, { FC, useState } from "react";
import style from "./Search.module.css";
import searchIcon from "../../assets/svg/icons8-search.svg";
import closeIcon from "../../assets/svg/icons8-close.svg";
import { useLazySearchFilmsQuery } from "../../store/KinopoiskApiUnofficial/KAU.api";
import SearchCard from "../SearchCard/SearchCard";

const Search: FC = () => {
  const [value, setValue] = useState<string>("Мстители");
  const [open, setOpen] = useState(false);
  const [getFilms, { data, isLoading, error }] = useLazySearchFilmsQuery();

  const serchData = () => {
    if (open) {
      setOpen(!open);
    } else {
      getFilms(value);
      setOpen(!open);
    }
  };
  console.log(open);

  return (
    <div className={style.wrapper}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите название"
      />
      <button className={style.btn} onClick={serchData}>
        <img src={open ? closeIcon : searchIcon} alt="" />
      </button>

      <div className={style.list}>
        {open
          ? data?.map((i) => {
              return <SearchCard key={i.kinopoiskId} {...i} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Search;
