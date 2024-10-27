import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContex';
import { config } from '../config/Config';

const Boarder = ({ border }) => {

    const { darkMode } = useContext(ThemeContext)
    const [countryName, setCountryName] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${config.API_BASE_URL}/alpha?codes=${border}`);
            const data = await res.json();
            setCountryName(data[0].name.common);
        }
        fetchData();
    }, [border])
    return (
        <Link to={`/details/${countryName}`}>
            <button className={`${darkMode ? "bg-DarkBlue text-white" : "bg-white text-gray-500 hover:bg-gray-100 "} py-2 px-4 rounded-lg shadow `}>
                {countryName}
            </button>
        </Link>
    )
}

export default Boarder;