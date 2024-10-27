export const filterCountries = (countryData, { region, subRegion, search }) => {
  return countryData
    .filter((country) => country.region.includes(region))
    .filter((country) => (subRegion ? country.subregion === subRegion : true))
    .filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
};
