import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../contexts/ThemeContex";

const SearchBar = ({ setSearch }) => {
    const { darkMode } = useContext(ThemeContext);
    const handleInputChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    };
    return (
        <div className="max-w-sm">
            <div className={`relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg ${darkMode ? "bg-DarkBlue" : "bg-white"} overflow-hidden`}>
                <div className={`grid place-items-center h-full w-12 ${darkMode ? "text-white" : "text-gray-400"}`}>
                    <FaSearch className="w-full mx-5" />
                </div>
                <input
                    className={`peer h-full w-full outline-none text-sm  ${darkMode ? "bg-DarkBlue text-white" : "text-gray-700"} pr-2`}
                    type="text"
                    id="search"
                    name="search"
                    onChange={handleInputChange}
                    placeholder="Search for a country..."
                />
            </div>
        </div>
    );
};

export default SearchBar;
