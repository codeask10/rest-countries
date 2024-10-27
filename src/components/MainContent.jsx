import React, { useState, useEffect, useContext } from 'react';
import SearchBar from './../filters/SearchBar';
import Region from './../filters/Region';
import CountryLists from './CountryLists'
import SubRegion from './../filters/SubRegion';
import Sort from './../filters/Sort'
import { ThemeContext } from '../contexts/ThemeContex';
import { config } from '../config/Config';
import { sortCountries } from '../utility/Sort';

const MainContent = () => {
    const { darkMode } = useContext(ThemeContext);
    const [countryData, setCountryData] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");
    const [subRegion, setSubRegion] = useState("");
    const [sort, setSort] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${config.API_BASE_URL}/all`);
            const data = await res.json();
            setCountryData(data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        setSubRegion("");
    }, [region]);

    const sortedByValue = sort ? sortCountries(countryData, sort) : [...countryData]
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