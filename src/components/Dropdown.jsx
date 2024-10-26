import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContex'

const Dropdown = ({ filterBy, filterDatas, setValue }) => {

    const { darkMode } = useContext(ThemeContext);

    const handleFilterChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <select className={`lg:w-auto sm:w-full p-3 shadow-md outline-none rounded-md ${darkMode ? "bg-DarkBlue text-white" : "bg-white text-black"}`} onChange={handleFilterChange}>
            <option value="" >{filterBy}</option>
            {filterDatas.map(
                (filterData) =>
                    <option key={filterData} value={filterData}>{filterData}</option>
            )}
        </select>
    )
}

export default Dropdown;