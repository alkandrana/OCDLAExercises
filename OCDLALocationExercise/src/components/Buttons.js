import Button from "./Button.js";
export default function Buttons({cities, activeCityId, setActiveCityId}) {
    const buttonsDiv = document.createElement("div");
    buttonsDiv.id = "buttons-container";
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i];
        let isActive = activeCityId == city.id;
        // add location buttons to the page
        const btn = <Button label={city.name} id={city.id} active={isActive} />;     // note that the object property names have to be the same as the function parameter names

        // create click history
        // btnHistory.push({btn: city.name, status: "unclicked"});

        // define click behavior
        btn.addEventListener("click", (e) => {

            let target = e.currentTarget;
            let id = target.id;
            console.log(id);
            setActiveCityId(id);
            // display location details
            // LocationDetails(city);
            // update click history
            // updateBtnStatus(city);
            // update button appearance to match
            // updateButtons();
        });
        buttonsDiv.append(btn);
    }
    return buttonsDiv;
}