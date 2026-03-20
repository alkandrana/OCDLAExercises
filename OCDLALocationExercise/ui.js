// Javascript DOM manipulation
import {Location} from './Location.js';
// array of Locations corresponding to 10 major U.S. cities
const cities = [
    new Location(1, "Portland", 45.51929799445891, -122.55059380561721),
    new Location(2, "Eugene", 44.05273769018593, -123.091298552413),
    new Location(3, "Ithaca", 42.44383576586961, -76.50146579178403),
    new Location(4, "Tucson", 32.251468707088634, -110.98414308156265),
    new Location(5, "Seattle", 47.602568811351524, -122.31537863297282),
    new Location(6, "Philadelphia", 39.95028912004508, -75.13656943428923),
    new Location(7, "Twin Falls", 42.5561565167427, -114.46769327545856),
    new Location(8, "Madison", 43.07146266650549, -89.39817593929902),
    new Location(9, "Springfield", 37.209458041230796, -93.28626956023608),
    new Location(10, "Indianapolis", 39.77567027005204, -85.78272522886947)
];

const btnHistory = [];

// display location details on the page
function showLocation(city) {
    const container = document.createElement("p");
    const content = document.createTextNode(`${city.name}: ${city.lat}, ${city.lng}`);
    container.appendChild(content);
    const cityContainer = document.getElementById(city.id);
    if (!cityContainer.querySelector("p")) {    // add location details to page if not already present
        cityContainer.appendChild(container);           // check for preexisting p element in city div and if none exists append p element to city div
    }
}

// update click history
function updateBtnStatus(city){
    for (let i = 0; i < btnHistory.length; i++) {
        if (btnHistory[i].btn === city.name){
            btnHistory[i].status = "active";
        } else if (btnHistory[i].status === "active") {
            btnHistory[i].status = "clicked";
        }
    }
}

// update button appearance to match click history
function updateButtons(){
    for (const h of btnHistory){
        const city = cities.find(c => c.name === h.btn);
        const btn = document.getElementById(city.id).querySelector("button");
        if (h.status === "active"){
            btn.classList.remove("btn-primary", "btn-warning");
            btn.classList.add("btn-success");
        } else if (h.status === "clicked"){
            btn.classList.remove("btn-primary", "btn-success");
            btn.classList.add("btn-warning");
        } else if (h.status === "unclicked"){
            btn.classList.remove("btn-success", "btn-warning");
            btn.classList.add("btn-primary");
        } else {
            console.log("Status not recognizable.");
            btn.classList.remove("btn-success", "btn-warning", "btn-primary");
        }
    }
}

// create button element for given city, and add to the page
function buildBtn(city){
    const cityContainer = document.createElement("div");
    cityContainer.id = String(city.id);
    cityContainer.classList.add("col")
    // create button element
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-primary");
    // create button label
    const btnName = document.createTextNode(city.name);
    btn.appendChild(btnName);
    cityContainer.appendChild(btn);
    // append button to page
    const page = document.querySelector("#main");
    page.appendChild(cityContainer);
    return btn;
}

for (let i = 0; i < cities.length; i++) {
    const city = cities[i];

    // add location buttons to the page
    const btn = buildBtn(city);

    // create click history
    btnHistory.push({btn: city.name, status: "unclicked"});

    // define click behavior
    btn.addEventListener("click", () => {
        // display location details
        showLocation(city);
        // update click history
        updateBtnStatus(city);
        // update button appearance to match
        updateButtons();
    });
}