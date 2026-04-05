
export default class StringUtils {

// Los Angeles
    // 123 Main Street, Los Angeles
    static toId(source){
        let firstElement;
        let parts = source.split(/[, ]/);
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