import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import "antd/dist/reset.css";
import Header from "./components/Header/Header";
import SerialsBoard from "./components/SerialsBoard/SerialsBoard";
import { SerialsContext } from "./Context/SerialsContext";

import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "./firebase";
import { UseActions } from "./hooks/actions";

interface IProps {
  filmId: number;
  season: number;
  id: string;
}

function App() {
  const [theme, settheme] = useState("light");
  const { setFilms } = UseActions();
  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    await getDocs(collection(db, "films")).then((querySnapshot) => {
      const newData: IProps[] = querySnapshot.docs.map((doc) => ({
        filmId: doc.data().filmId,
        season: doc.data().season,
        id: doc.id,
      }));
      console.log(newData);

      setFilms(newData);
    });
  };
  return (
    <div
      className={["App", theme === "dark" ? "AppDark" : "AppLight"].join(" ")}
    >
      <div className="container">
        <SerialsContext.Provider value={{ theme: theme, onChange: settheme }}>
          <Header />
          <Search />
          <SerialsBoard />
        </SerialsContext.Provider>
      </div>
    </div>
  );
}

export default App;
