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
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAppSelector } from "./hooks/redux";
import { useCollectionData } from "react-firebase-hooks/firestore";

interface IProps {
  filmId: number;
  season: number;
  id: string;
}

function App() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [theme, settheme] = useState("light");

  return (
    <div
      className={["App", theme === "dark" ? "AppDark" : "AppLight"].join(" ")}
    >
      <div className="container">
        <SerialsContext.Provider value={{ theme: theme, onChange: settheme }}>
          <Header />
          <Search />
          {user && <SerialsBoard userUid={user?.uid} />}
        </SerialsContext.Provider>
      </div>
    </div>
  );
}

export default App;
