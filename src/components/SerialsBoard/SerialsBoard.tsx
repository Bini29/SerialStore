import { collection } from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Loader from "../Loader/Loader";
import CardSerial from "./CardSerial";
import style from "./SerialsBoard.module.css";

interface IProps {
  userUid: string;
}
interface IPropsFilm {
  name: string;
  season: number;
  poster: string;
  id: string;
  filmId: number;
  type: string;
}
const SerialsBoard: FC<IProps> = ({ userUid }) => {
  const [items, setItems] = useState<IPropsFilm[]>([]);

  const [data, loading] = useCollection(
    collection(db, "t9dNlGKwWsUPdlVTv5pLq2kDDGk2")
  );

  useEffect(() => {
    if (data) {
      let formatData: IPropsFilm[] = data.docs.map((doc) => ({
        filmId: doc.data().filmId,
        season: doc.data().season,
        name: doc.data().name,
        poster: doc.data().poster,
        id: doc.id,
        type: doc.data().type,
      }));
      setItems(formatData);
    }
  }, [data]);

  if (loading) {
    return (
      <div className={style.lcontainer}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={style.board}>
      {items?.map((i) => {
        return <CardSerial key={i.id} {...i} />;
      })}
    </div>
  );
};

export default SerialsBoard;
