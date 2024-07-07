import { NavLink } from "react-router-dom";
import "./Header.scss";
import Search from "../Search/Search";

const list = [
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
];

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to={"/"}>All</NavLink>
        </li>
        {list.map((el, index) => (
          <li key={index}>
            <NavLink to={`/region/${el}`}>{el}</NavLink>
          </li>
        ))}
      </ul>
      <Search />
    </header>
  );
};

export default Header;
