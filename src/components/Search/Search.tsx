import React, { FC, useEffect, useState } from "react";
import style from "./Search.module.css";
import searchIcon from "../../assets/svg/icons8-search.svg";
import closeIcon from "../../assets/svg/icons8-close.svg";
import { useSearchFilmsQuery } from "../../store/KinopoiskApiUnofficial/KAU.api";
import SearchCard from "../SearchCard/SearchCard";
import { useDebounce } from "../../hooks/debounce";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Search: FC = () => {
  const [user] = useAuthState(auth);
  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [heightList, setHeightList] = useState(0);
  const debounced = useDebounce(value);

  const { data } = useSearchFilmsQuery(debounced, {
    skip: debounced.length < 3,
  });

  useEffect(() => {
    setOpen(debounced.length > 3 && data?.length! > 0);

    if (data?.length!) {
      setHeightList(data.length * 44);
    } else {
      setHeightList(0);
    }
  }, [debounced, data]);

  const serchData = () => {
    if (open) {
      setOpen(!open);
      setValue("");
    } else {
      setOpen(!open);
    }
  };

  if (!user) {
    return <div className={"themeListNoauth"}> Авторизируйтесь для начала</div>;
  }
  return (
    <div className={style.wrapper}>
      <div className={style.pabs}>
        <div className={style.inputArea}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Введите название"
          />
          <button className={style.btn} onClick={serchData}>
            <img src={open ? closeIcon : searchIcon} alt="" />
          </button>
        </div>
        <div
          className={[style.list, open ? style.listOpen : "", "themeList"].join(
            " "
          )}
          style={{
            height: data === undefined ? "0px" : `${heightList}px`,
          }}
        >
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
    </div>
  );
};

export default Search;
