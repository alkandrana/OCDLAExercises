export default function LocationDetails({city}) {
    const container = document.createElement("p");
    const content = document.createTextNode(city != null ? `${city.name}: ${city.lat}, ${city.lng}`: "");
    container.appendChild(content);
    return container;
}