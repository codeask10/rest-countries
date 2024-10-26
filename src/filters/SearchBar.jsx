import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearch }) => {
    const handleInputChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    };
    return (
        <div className="max-w-sm">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-400 ">
                    <FaSearch className="w-full mx-5" />
                </div>
                <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
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
