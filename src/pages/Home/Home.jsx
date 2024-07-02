import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../store/slices/countriesSlice";

import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  //getting Data
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const { countries, isFetching } = useSelector((state) => state.countriesData);
  return (
    <div className="home">
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        countries.map((el) => (
          <div className="item" key={el.name.official}>
            <NavLink to={`/name/${el.name.official}`}>
              <img src={el.flags.png} alt="" />
            </NavLink>
            <h3>{el.name.common}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
