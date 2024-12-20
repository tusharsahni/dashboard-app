import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Select from "react-select";



const ClaimForm = () => {
    const [currencies, setCurrencies] = useState([]);
    const [countries, setCountries] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [contractValue, setContractValue] = useState("100000");
    const [claimValue, setClaimValue] = useState("150000");
    const calculatePercentage = () => {
        if (contractValue && claimValue) {
          return ((parseFloat(claimValue) / parseFloat(contractValue)) * 100).toFixed(2);
        }
        return 0;
      };
    

    // Fetch data for currencies, countries, and languages
    useEffect(() => {
        // Fetch currencies
        fetch("https://openexchangerates.org/api/currencies.json")
            .then((response) => response.json())
            .then((data) => {
                const formattedCurrencies = Object.keys(data).map((key) => ({
                    value: key,
                    label: `${key} - ${data[key]}`,
                }));
                setCurrencies(formattedCurrencies);
            });

        // Fetch countries
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                const formattedCountries = data.map((country) => ({
                    value: country.cca2,
                    label: country.name.common,
                }));
                setCountries(formattedCountries);
            });

        // Fetch languages
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                const languages = new Set();
                data.forEach((country) => {
                    if (country.languages) {
                        Object.values(country.languages).forEach((lang) => languages.add(lang));
                    }
                });

                const formattedLanguages = Array.from(languages).map((lang) => ({
                    value: lang,
                    label: lang,
                }));

                setLanguages(formattedLanguages);
            })
            .catch((error) => console.error("Error fetching languages:", error));
    }, []);

    return (
        <div className="flex-1  bg-white">
            <h2 className="text-l font-semibold font-poppins mb-5 px-10 pt-10">File your Claim. <span className="font-poppins text-xs text-gray-400"> (Approx 5 Minutes)</span></h2>

            <hr class="h-0.5 bg-gray-300 border-0" />

            <div className="space-y-6">
                {/* Claim Value Section */}

                <div className="flex flex-row justify-evenly">

                <div className="flex-col flex-1 p-10">
      <div className="flex-1 pb-6">
        <div className="heading font-semibold font-poppins mb-2 text-gray-600 flex items-center">
          <img src="./calculator.png" alt="" height="24" width="24" className="mr-2" />
          Claim Value
        </div>

        <label className="block text-base mb-2 text-gray-400">Contract Value</label>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 bg-gray-200"
            placeholder="10,00,00"
            value={contractValue}
            onChange={(e) => setContractValue(e.target.value)}
          />
          <Select options={currencies} placeholder="USD" className="w-3/5" />
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-base mb-2 text-gray-400">Claim Value</label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 bg-gray-200"
            placeholder="15,00,00"
            value={claimValue}
            onChange={(e) => setClaimValue(e.target.value)}
          />
          <Select options={currencies} placeholder="USD" className="w-3/5" />
        </div>
        {/* Displaying the percentage below Claim Value */}
        { (
          <div className="text-xs text-orange-400 font-semibold  mt-2">
            {calculatePercentage()} % of Contract Value
          </div>
        )}
      </div>
    </div>

                    {/* Place and Language Section */}
                    <div className="flex flex-1 flex-col space-y-6 p-10">
                        <div className="flex-1">
                            <label className=" flex font-semibold font-poppins mb-2 text-gray-600"> <img src="./gps.png" alt="" height="24" width="24" className="mr-2" />Place</label>
                            <Select
                                options={countries}
                                placeholder="Select the place for proceedings"
                                className="w-full text-xs text-gray-500 rounded-md bg-gray-200" // Tailwind background class for input
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        backgroundColor: '#e5e7eb', // Tailwind's gray-200 color for control background
                                        borderColor: '#ccc', // Optional: Change border color
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        backgroundColor: '#e5e7eb', // Tailwind's gray-200 for the dropdown menu
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: state.isFocused ? '#d1d5db' : '#e5e7eb', // Gray-300 on hover/focus
                                        color: '#333', // Text color for options
                                        padding: '8px 12px',
                                        ':active': {
                                            backgroundColor: '#d1d5db', // Darker gray on option click
                                        },
                                    }),
                                }}
                            />
                        </div>

                        <div className="flex-1">
                            <form className="space-y-4">
                                <label className="block text-sm mb-2 text-gray-400">
                                    Is the place for the proceedings the one mentioned in the agreement?
                                </label>
                                <div className="space-y-2 space-x-6 text-gray-400">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="choice"
                                            value="yes"
                                            className="form-radio text-blue-600"
                                        />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="choice"
                                            value="no"
                                            className="form-radio text-red-600"
                                        />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="flex flex-col space-y-6 p-10 flex-1">
                        <div className="flex-1">
                            <label className="flex font-semibold font-poppins mb-2 text-gray-600"> <img src="./communication.png" alt="" height="24" width="24" className="mr-2" />Language</label>
                            <Select
                                options={languages}
                                placeholder="Select the languages for proceedings"
                                className="w-full text-xs text-gray-500 rounded-md bg-gray-200"
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        backgroundColor: '#e5e7eb',
                                        borderColor: '#ccc',
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        backgroundColor: '#e5e7eb',
                                    }),
                                    option: (provided, state) => ({
                                        ...provided,
                                        backgroundColor: state.isFocused ? '#d1d5db' : '#e5e7eb',
                                        color: '#333',
                                        padding: '8px 12px',
                                        ':active': {
                                            backgroundColor: '#d1d5db',
                                        },
                                    }),
                                }}
                            />
                        </div>

                        <div className="flex-1">
                            <form className="space-y-4">
                                <label className="block text-sm mb-2 text-gray-400 ">
                                    Is the language for the proceedings the one mentioned in the agreement?
                                </label>
                                <div className="space-y-2 space-x-6 text-gray-400">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="choice"
                                            value="yes"
                                            className="form-radio text-blue-600"
                                        />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="choice"
                                            value="no"
                                            className="form-radio text-red-600"
                                        />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>


                <hr class="h-0.5 bg-gray-300 border-0" />


                {/* Statement and File Upload Section */}
                {/* <div>
                <label className="block font-semibold mb-2">Statement</label>
                <input type="file" className="block border border-gray-300 rounded-md p-2" />
            </div> */}

                <div className="thirdrow flex flex-row justify-evenly ">

                    <div class="flex flex-col p-10 flex-1 ">
                        <label className="flex font-semibold font-poppins mb-2 text-gray-600"><img src="./ballot.png" alt="" height="24" width="24" className="mr-2" />Statement</label>
                        <label for="dropzone-file" class="flex flex-col items-center justify-center  h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">

                                <p class="mb-2 text-xs text-gray-500 dark:text-gray-400 text-center p-10 ">
                                    <span class="font-semibold">Write your statement here</span>
                                    <br /> <br />
                                    or
                                    <span class="flex items-center justify-center mt-2 whitespace-nowrap">
                                        <svg class="w-8 h-8 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        upload a pdf
                                    </span>
                                </p>

                                <p class="text-xs text-gray-500 dark:text-gray-400"></p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>
                    <div className="two flex flex-col p-10 flex-1">

                        <div className="twolabel">
                            <label className="flex font-semibold font-poppins mb-2 text-gray-600"> <img src="./second.png" alt="" height="24" width="24" className="mr-2" />Agreement Under Disputes</label>
                        </div>
                        <div className="flex space-x-6  flex-row">



                            <div class="flex flex-row ">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center  h-48 w-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-xs text-gray-500 dark:text-gray-400 text-center p-5">
                                            <span class="font-semibold">Upload the Contract</span>
                                            <br /> <br />

                                            <span class="flex items-center justify-center mt-2 text-xs text-blue-500">

                                                MAX 2MB, PDF
                                            </span>
                                        </p>

                                        <p class="text-xs text-gray-500 dark:text-gray-400"></p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>
                            <div class="flex ">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center  h-48 w-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2  text-gray-500 dark:text-gray-400 text-center p-5 text-xs">
                                            <span class="font-semibold ">Arbritation Agreement</span>
                                            <br /> <br />

                                            <span class="flex items-center justify-center mt-2 text-xs text-blue-500">

                                                MAX 2MB, PDF
                                            </span>
                                        </p>

                                        <p class="text-xs text-gray-500 dark:text-gray-400"></p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>

                            </div>
                        </div>

                    </div>


                    <div className="flex flex-col p-10 flex-1">

                        <div className="threelabel">
                            <label className="flex font-semibold font-poppins mb-2 text-gray-600 whitespace-nowrap "> <img src="./last.png" alt="" height="24" width="24" className="mr-2" />Additional Documentation</label>
                        </div>

                        <div className="joiner flex flex-row">
                            <div class="flex ">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center  h-48 w-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-xs text-gray-500 dark:text-gray-400 text-center p-5">
                                            <span class="font-semibold">Upload the Contract</span>
                                            <br /> <br />

                                            <span class="flex items-center justify-center mt-2 text-xs text-blue-500">

                                                MAX 2MB, PDF
                                            </span>
                                        </p>

                                        <p class="text-xs text-gray-500 dark:text-gray-400"></p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>

                            <div className="flex justify-center items-center">
                                <label htmlFor="dropzone-file" className="cursor-pointer">
                                    <img
                                        src="./add_13136466.png"
                                        alt="Add File"
                                        height="200"
                                        width="200"
                                        className="rounded-lg transition-transform transform hover:scale-105 ml-4"
                                    />
                                </label>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ClaimForm;