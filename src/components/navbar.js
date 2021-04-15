import React, { useContext } from "react";
import axios from "axios";
import popcorn from "../images/popcorn.svg";
import { SearchContext } from "./context";

const NavBar = () => {
  const [search, setSearch, data, setData] = useContext(SearchContext);
  const onEnter = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
    }
  };

  return (
    <div className="navbar">
      <div className="title">
        <p>
          Popcorn<span>Time</span>
        </p>
        <img src={popcorn} alt="Popcorn" />
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => onEnter(e)}
      />
    </div>
  );
};

export default NavBar;
