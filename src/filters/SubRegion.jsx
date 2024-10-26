import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";

const SubRegion = ({ setSubRegion, region, countryData }) => {
    const [subRegions, setSubRegions] = useState([]);
    useEffect(() => {
        if (region) {
            const filteredSubRegions = [
                ...new Set(
                    countryData
                        .filter((country) => country.region === region)
                        .map((country) => country.subregion)
                        .filter((subregion) => subregion)
                ),
            ];
            setSubRegions(filteredSubRegions);
        } else {
            setSubRegions([]);
        }
    }, [region, countryData]);
    return (
        <div>
            {subRegions && (
                <Dropdown
                    filterBy="Filter By SubRegion"
                    filterDatas={subRegions}
                    setValue={setSubRegion}
                />
            )}
        </div>
    );
};

export default SubRegion;
