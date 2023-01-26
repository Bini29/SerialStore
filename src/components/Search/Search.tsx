import React, { FC, useEffect, useState } from "react";
import style from "./Search.module.css";
import searchIcon from "../../assets/svg/icons8-search.svg";
import closeIcon from "../../assets/svg/icons8-close.svg";
import { useSearchFilmsQuery } from "../../store/KinopoiskApiUnofficial/KAU.api";
import SearchCard from "../SearchCard/SearchCard";
import { useDebounce } from "../../hooks/debounce";

const Search: FC = () => {
  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState(false);
  const debounced = useDebounce(value);
  const { data, isLoading, error } = useSearchFilmsQuery(debounced, {
    skip: debounced.length < 3,
  });

  useEffect(() => {
    setOpen(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);

  const serchData = () => {
    if (open) {
      setOpen(!open);
      setValue("");
    } else {
      // getFilms(value);
      setOpen(!open);
    }
  };
  console.log(debounced);

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

      <div className={[style.list, open ? style.listOpen : ""].join(" ")}>
        {open
          ? data?.map((i) => {
              return <SearchCard key={i.filmId} {...i} />;
            })
          : null}
      </div>
      {data?.length! === 0 ? (
        <div className={style.noneserch}>
          <p> "Ничего не найдено"</p>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
