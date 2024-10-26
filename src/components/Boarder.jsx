import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Boarder = ({ border }) => {
    const [countryName, setCountryName] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/alpha/${border}`);
            const data = await res.json();
            setCountryName(data[0].name.common);
        }
        fetchData();
    }, [border])
    return (
        <Link to={`/details/${countryName}`}>
            <button className="bg-white text-gray-500 py-2 px-4 rounded-lg shadow hover:bg-gray-100">
                {countryName}
            </button>
        </Link>
    )
}

export default Boarder;