export function jsx(component, attrs){
    console.log("jsx called with component", component, "and attrs:", attrs);
    return component(attrs);
}