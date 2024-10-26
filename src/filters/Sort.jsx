import React from "react";
import Dropdown from "../components/Dropdown";

const Sort = ({ setSort }) => {
    const sortByValue = [
        "Population Asc",
        "Population Desc",
        "Area Asc",
        "Area Desc",
    ];
    return (
        <div>
            {sortByValue && (
                <Dropdown
                    filterBy="Sort"
                    filterDatas={sortByValue}
                    setValue={setSort}
                />
            )}
        </div>
    );
};

export default Sort;
