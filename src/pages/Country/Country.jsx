import { useEffect } from "react";
import { fetchOne } from "../../store/slices/countriesSlice";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TiArrowBack } from "react-icons/ti";

import "./Country.scss";

const Country = () => {
  const { name } = useParams();
  console.log(name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOne(name));
  }, [name]);

  const { country, isFetching } = useSelector((state) => state.countriesData);

  return (
    <section>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        country.map((el) => (
          <div key={el.name.official} className="item">
            <img src={el.flags.png} alt="" />
            <h3>{el.name.common}</h3>
            <NavLink to="/">
              <button>
                <TiArrowBack className="arrow" />
                <span>Go Back</span>
              </button>
            </NavLink>
          </div>
        ))
      )}
    </section>
  );
};

export default Country;
