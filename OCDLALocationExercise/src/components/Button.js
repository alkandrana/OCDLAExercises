export default function Button(label, id, active = false){
    const button = document.createElement("div");
    button.id = String(label);
    button.classList.add("col")
    // create button element
    const btn = document.createElement("button");
    btn.classList.add("btn", !active ? "btn-primary" : "btn-success");
    // create button label
    const btnName = document.createTextNode(label);
    btn.appendChild(btnName);
    button.appendChild(btn);
    // append button to page
    return button;
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