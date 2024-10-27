export const sortCountries = (countries, sortType) => {
    const sortedCountries = [...countries];
    switch (sortType) {
        case "Population Asc":
            return sortedCountries.sort((a, b) => a.population - b.population);
        case "Population Desc":
            return sortedCountries.sort((a, b) => b.population - a.population);
        case "Area Asc":
            return sortedCountries.sort((a, b) => a.area - b.area);
        case "Area Desc":
            return sortedCountries.sort((a, b) => b.area - a.area);
        default:
            return countries;
    }
};
