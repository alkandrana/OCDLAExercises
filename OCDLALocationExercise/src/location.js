import StringUtils from "./utils/StringUtils.js";
export class Location {
    constructor(name, lat, lng){
        this.id = StringUtils.toId(name);
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
}

