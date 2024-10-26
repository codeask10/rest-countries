import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";

const Region = ({ setRegion, countryData }) => {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        const filteredRegions = [
            ...new Set(
                countryData.map((country) => country.region).filter((region) => region)
            ),
        ];
        setRegions(filteredRegions);
    }, [countryData]);

    console.log(regions);

    return (
        <div>
            {regions && (
                <Dropdown
                    filterBy="Filter By Region"
                    filterDatas={regions}
                    setValue={setRegion}
                />
            )}
        </div>
    );
};

export default Region;
