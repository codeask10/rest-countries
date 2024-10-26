import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Boarder from './Boarder';
import { FaArrowLeftLong } from "react-icons/fa6";

const CountryDetails = () => {
    const { name } = useParams();
    const [countryDetail, setCountryDetail] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/name/${name}?fullText=true`);
            const data = await res.json();
            setCountryDetail(data[0]);
        };
        fetchData();
    }, [name]);

    if (!countryDetail) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="max-w-screen-xl mx-auto mt-10 ">
            <div className="px-7 pt-10 flex flex-col justify-center items-start gap-10">
                <Link to="/">
                    <button className="p-3 flex justify-center gap-6  text-xl font-bold w-32 card shadow-lg rounded-md" >
                        <FaArrowLeftLong className='my-1' /> Back
                    </button>

                </Link>

                <div className="flex max-md:flex-col gap-10 ">
                    <div className="w-full lg:w-2/4 lg:h-[30rem] ">
                        <img className="w-full h-auto" src={countryDetail.flags.png} alt="Country Flag" />
                    </div>

                    <div className="w-full lg:w-2/4 ">
                        <h2 className="text-3xl font-bold mb-5">{countryDetail.name.common}</h2>

                        <div className="flex flex-col gap-10 lg:flex-row justify-between mb-5">
                            <ul className="space-y-2">
                                <li><b>Native Name: </b> {countryDetail.name.nativeName
                                    && Object.values(countryDetail.name.nativeName)[0].common
                                }
                                </li>
                                <li><b>Population: </b> {countryDetail.population}</li>
                                <li><b>Region: </b> {countryDetail.region}</li>
                                <li><b>Sub Region: </b> {countryDetail.subregion}</li>
                                <li><b>Capital: </b> {countryDetail.capital}</li>
                            </ul>
                            <ul className="space-y-2 mt-4 lg:mt-0">
                                <li><b>Top Level Domain: </b>{countryDetail.tld && countryDetail.tld.join(", ")}</li>
                                <li><b>Currencies: </b>{countryDetail.currencies
                                    ? Object.values(countryDetail.currencies)
                                        .map((currency) => currency.name)
                                        .join(", ")
                                    : "NA"}
                                </li>
                                <li><b>Languages: </b> {countryDetail.languages && Object.values(countryDetail.languages).join(", ")}
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col lg:flex-row items-start gap-4">
                            <span className="w-40 py-2 font-bold">Border Countries:</span>
                            <div className="flex flex-wrap gap-2">
                                {countryDetail.borders && countryDetail.borders.map((border, index) => (
                                    <Boarder key={index} border={border} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;
