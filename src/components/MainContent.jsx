import React, { useState, useEffect, useContext } from 'react';
import SearchBar from './../filters/SearchBar';
import Region from './../filters/Region';
import CountryLists from './CountryLists'
import SubRegion from './../filters/SubRegion';
import Sort from './../filters/Sort'
import { ThemeContext } from '../contexts/ThemeContex';

const MainContent = () => {
    const { darkMode } = useContext(ThemeContext);
    const [countryData, setCountryData] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");
    const [subRegion, setSubRegion] = useState("");
    const [sort, setSort] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/all");
            const data = await res.json();
            setCountryData(data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        setSubRegion("");
    }, [region]);

    let sortedByValue = [...countryData];

    if (sort) {
        if (sort === "Population Asc") {
            sortedByValue.sort((a, b) => a.population - b.population);
        }
        else if (sort === "Population Desc") {
            sortedByValue.sort((a, b) => b.population - a.population);
        }
        else if (sort === "Area Asc") {
            sortedByValue.sort((a, b) => a.area - b.area);
        }
        else {
            sortedByValue.sort((a, b) => b.area - a.area);
        }
    }
    else {
        sortedByValue = [...countryData];
    }
    console.log(darkMode);
    return (
        <div className={`${darkMode ? "bg-VeryDarkBlue" : ""} p-6`}>
            <div className="max-w-screen-xl mx-auto mt-4 mb-12 flex flex-col md:flex-row justify-between gap-6">
                <div className='flex-grow'>
                    <SearchBar setSearch={setSearch} />
                </div>
                <div className="w-full md:w-auto">
                    <Region setRegion={setRegion} countryData={countryData} />
                </div>
                <div className="w-full md:w-auto">
                    <SubRegion setSubRegion={setSubRegion} region={region} countryData={countryData} />
                </div>
                <div className="w-full md:w-auto">
                    <Sort setSort={setSort} />
                </div>
            </div>
            <CountryLists search={search} region={region} subRegion={subRegion} countryData={sortedByValue} />
        </div>

    )
}

export default MainContent;