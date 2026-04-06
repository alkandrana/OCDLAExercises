
import {render} from "./react/client.js";
import App from './components/App.js';
import {cities} from "./data/cities.js";
const page = document.querySelector("#main");
render(page, App);

const histories = [];
for (const c of cities) {
    histories.push(new History(c.id, c.name, "unclicked"));
}

// trigger when some button is changed to active
// update the status of the currently active button
/*
function updateHistory(id){
    // findIndex gets the first element that matches
    // TODO: strictly speaking we should check for duplicates (and, of course, "not found" case)
    let lastActiveCity = cities.findIndex(cities => cities.status === "active");
    let newActiveCity = cities.findIndex(c => c.id === id);
    cities[lastActiveCity].status = "clicked";
    cities[newActiveCity].status = "active";
}

// TODO: id should come from the just-clicked button tracked by useState()
document.addEventListener("HistoryChange", () => {
    updateHistory(id);
})*/
