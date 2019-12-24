import ReactDOM from "react-dom";
import React from "react";
import { SearchBar } from "./SearchBar";

export const App = () => {
  return (
    <div className={"ui container"} style={{ marginTop: "50px" }}>
      <SearchBar />
    </div>
  );
};
