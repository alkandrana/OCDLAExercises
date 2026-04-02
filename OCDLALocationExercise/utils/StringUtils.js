import {Location} from "../location";

const locations = [new Location(1, "Portland", 45.51929799445891, -122.55059380561721),
    new Location(2, "Eugene", 44.05273769018593, -123.091298552413),
    new Location(3, "Ithaca", 42.44383576586961, -76.50146579178403)]
class StringUtils {

// Los Angeles
    // 123 Main Street, Los Angeles
    static toId(source){
        let firstElement;
        let parts = source.split(/[, ]/);
        debugger
        parts = parts.filter(p => !!p);
        parts = parts.map(p => p.trim());
        parts = parts.map(p => p.toLowerCase());
        if (StringUtils.isNumber(parts[0])){
            firstElement = parts.shift();
        }
        let id = parts.join("-");
        return id;
    }
    static isNumber(str) {
        return /^\d+$/.test(str);
    }
}