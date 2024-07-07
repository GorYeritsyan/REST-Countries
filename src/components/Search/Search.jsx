import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import "./Search.scss";
import { NavLink, useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <NavLink to={`/name/${search}`}>
        <IoSearch onClick={() => setSearch('')} className="icon" />
      </NavLink>
    </div>
  );
};

export default Search;
