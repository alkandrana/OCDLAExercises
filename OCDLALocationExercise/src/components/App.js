import {cities} from '../data/cities.js'
import LocationDetails from "./LocationDetails.js";
import {useState} from "../react/client.js";
import Buttons from "./Buttons.js";
export default function App(){
    const container = document.createElement("div");
    let [activeCityId, setActiveCityId] = useState(3);
    let city = activeCityId ? cities.find(c => c.id == activeCityId) : null;
    container.appendChild(Buttons(cities, activeCityId, setActiveCityId));
    container.appendChild(LocationDetails(city));
    return container;
}