import React, { useState, useContext } from "react";
import "../css/Navbar.css";
import { NewsContext } from "../contex/NewsContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const { searchNews } = useContext(NewsContext);
  const [searchQuery, setSearhQuery] = useState("");

  const handleSubmit = (e) => {
    history.push("/");
    e.preventDefault();
    searchNews(searchQuery);
  };

  return (
    <nav>
      <h3 className="logo">Hacker News</h3>

      <form className="form-inline">
        <input
          className="form-control"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearhQuery(e.target.value)}
        />

        <button className="btn btn-light" type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
