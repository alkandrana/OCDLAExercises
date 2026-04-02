function reorderButtons(){
    // let buttons = document.querySelectorAll('.btn');
    // I think this is more specific (rather than grabbing every conceivable button on the page)
    let buttonsContainer = document.getElementById("buttons-container");
    let buttons = buttonsContainer.childNodes;

    // alphabetize
    let sortedButtons = [...buttons].sort((a, b) => a.innerText.toLowerCase().localeCompare(b.innerText.toLowerCase()));

    // Once we get the new working list we use replaceChildren(param1, param2)
    // I don't think we need to specify the existing nodelist (param2)
    buttonsContainer.replaceChildren(...sortedButtons);
}