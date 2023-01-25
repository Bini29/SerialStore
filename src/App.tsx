import React, { createContext } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import "antd/dist/reset.css";
import Header from "./components/Header/Header";
import SerialsBoard from "./components/SerialsBoard/SerialsBoard";
import { SerialsContext } from "./Context/SerialsContext";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Search />
        <SerialsContext.Provider value="dark">
          <SerialsBoard />
        </SerialsContext.Provider>
      </div>
    </div>
  );
}

export default App;
