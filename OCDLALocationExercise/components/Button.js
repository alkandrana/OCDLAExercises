export default function Button(city, active = false){
    const cityContainer = document.createElement("div");
    cityContainer.id = String(city.id);
    cityContainer.classList.add("col")
    // create button element
    const btn = document.createElement("button");
    btn.classList.add("btn", !active ? "btn-primary" : "btn-success");
    // create button label
    const btnName = document.createTextNode(city.name);
    btn.appendChild(btnName);
    cityContainer.appendChild(btn);
    // append button to page
    return cityContainer;
}

function updateBtnStatus(city){
    for (let i = 0; i < btnHistory.length; i++) {
        if (btnHistory[i].btn === city.name){
            btnHistory[i].status = "active";
        } else if (btnHistory[i].status === "active") {
            btnHistory[i].status = "clicked";
        }
    }
}