import { filterCountries } from "../utility/FilterCountries";
import CountryCard from "./CountryCard";

const CountryLists = ({ search, region, subRegion, countryData }) => {
  const filteredData = filterCountries(countryData, {
    region,
    subRegion,
    search,
  });
  return (
    <div className="max-w-screen-xl m-auto">
      <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {filteredData.map((country) => (
          <div key={country.name.common} className="group relative ">
            <CountryCard
              name={country.name.common}
              flags={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryLists;
