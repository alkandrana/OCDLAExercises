let renderCount = 0;
let previousState = null;
let state = [];
let counter = 0;
let renderFn;
export function render(root, component) {
    renderFn = function renderFn() {
        previousState = JSON.stringify(state);
        root.innerHTML = "";
        root.appendChild(component());
        if (hasStateChanged(previousState, state)){
            // renderFn();
        }
        renderCount++;
        counter = 0;
    };
    renderFn();
}

function hasStateChanged(state1, state2){
    return true;
}
export function useState(defaultValue){
    let count = counter;
    if (renderCount === 0) {
        state[count] = defaultValue;
    }
    let setterFn = function(val){
        let prev = state[count];
        if (hasStateChanged(prev, val)){
            state[count] = val;
            renderFn();
        }
    };

    counter++;
    return [state[count], setterFn];
}