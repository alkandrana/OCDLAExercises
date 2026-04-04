// Javascript DOM manipulation

// array of Locations corresponding to 10 major U.S. cities


const btnHistory = [];

// display location details on the page


// update click history


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

//
