import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegion } from "../../store/slices/countriesSlice";
import "./Region.scss";

const Region = () => {
  const { region } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegion(region));
  }, [region]);

  const { oneRegion, isFetching } = useSelector((state) => state.countriesData);
  return (
    <section className="region">
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        oneRegion.map((el) => (
          <div className="item" key={el.name.official}>
            <NavLink to={`/name/${el.name.official}`}>
            <img src={el.flags.png} alt="" />
            </NavLink>
            <h3>{el.name.common}</h3>
          </div>
        ))
      )}
    </section>
  );
};

export default Region;
