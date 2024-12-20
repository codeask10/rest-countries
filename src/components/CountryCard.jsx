import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContex";
const CountryCard = ({ name, flags, population, region, capital }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`max-w-xs  ${
        darkMode ? "bg-DarkBlue border-DarkBlue" : "bg-white border-gray-200"
      } border box-border  rounded-lg shadow-md`}
    >
      <Link to={`/details/${name}`}>
        <img
          className="rounded-t-lg w-full h-52"
          src={flags}
          alt={`${name} Flags`}
        />

        <div className="p-5">
          <h5
            className={`mb-2 text-2xl font-bold ${
              darkMode && "text-white"
            } tracking-tight`}
          >
            {name}
          </h5>

          <ul>
            <li
              className={`mb-1 font-normal ${
                darkMode ? "text-white" : "text-black-300"
              }`}
            >
              <b>Population</b>: {population}
            </li>
            <li
              className={`mb-1 font-normal ${
                darkMode ? "text-white" : "text-black-300"
              }`}
            >
              <b>Region</b>: {region}
            </li>
            <li
              className={`mb-1 font-normal ${
                darkMode ? "text-white" : "text-black-300"
              }`}
            >
              <b>Capital</b>: {capital}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
