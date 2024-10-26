import React from 'react'
import { Link } from 'react-router-dom';
const CountryCard = ({ name, flags, population, region, capital }) => {
    return (
        <div className="max-w-xs  bg-white border border-gray-200 rounded-lg shadow">
            <Link to={`/details/${name}`}>
                <img className="rounded-t-lg w-full h-52" src={flags} alt="" />

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>

                    <ul>
                        <li className="mb-1 font-normal text-black-300"><b>Population</b>: {population}</li>
                        <li className="mb-1 font-normal text-black-300"><b>Region</b>: {region}</li>
                        <li className="mb-1  font-normal text-black-300"><b>Capital</b>: {capital}</li>
                    </ul>

                </div>
            </Link>
        </div>
    )
}

export default CountryCard;