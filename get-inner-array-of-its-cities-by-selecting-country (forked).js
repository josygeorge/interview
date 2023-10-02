{/* <iframe src="https://codesandbox.io/embed/get-inner-array-of-its-cities-by-selecting-country-forked-xrfcdj?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="get-inner-array-of-its-cities-by-selecting-country (forked)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> 
   https://codesandbox.io/embed/get-inner-array-of-its-cities-by-selecting-country-forked-xrfcdj?fontsize=14&hidenavigation=1&theme=dark
*/}

import "./styles.css";
import { useState, useEffect } from "react";

const countries = [
    { name: "India", code: "IN", cities: ["Bangalore", "Mumbai"] },
    { name: "Canada", code: "CA", cities: ["Toronto", "Calgary"] },
    { name: "Italy", code: "ITA", cities: ["Rome", "Milan"] }
];

export default function App() {
    const [countryCode, setCountryCode] = useState("IN");
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    useEffect(() => {
        /* const filteredCountry = countries.filter(
          (country) => country.code === countryCode
        );
        filteredCountry.map(city=> setCities(city.cities)) */
        countries
            .filter((country) => country.code === countryCode)
            .map((city) => setCities(city.cities));
    }, [countryCode]);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>select country to populate it's cities, which are an inner array</h2>
            <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
            >
                {countries.map((country, idx) => (
                    <option key={idx} value={country.code}>
                        {country.name}
                    </option>
                ))}
            </select>

            <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
            >
                {cities?.map((city, idx) => (
                    <option key={idx} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );
}
