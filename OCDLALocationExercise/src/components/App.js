import {cities} from '../data/cities.js'
import LocationDetails from "./LocationDetails.js";
import {useState} from "../react/client.js";
import Buttons from "./Buttons.js";
import {jsx} from "react/jsx-runtime.js"
export default function App(){
    const container = document.createElement("div");
    let [activeCityId, setActiveCityId] = useState("ithaca");
    let city = activeCityId ? cities.find(c => c.id == activeCityId) : null;
    container.appendChild(jsx(Buttons, {cities: cities, activeCityId: activeCityId, setActiveCityId: setActiveCityId}));
    container.appendChild(jsx(LocationDetails, {city: city}));
    return container;
}