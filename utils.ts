export const SVGImageURI = (width: number = 256, height: number = 256, fill: string = "#cccccc") => {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='${encodeURIComponent(fill)}'/%3E%3C/svg%3E`;
}

export const ObjKeysToLowerCase = (input:any): any => {
    if (typeof input !== 'object') return input;
    if (Array.isArray(input)) return input.map(ObjKeysToLowerCase);
    return Object.keys(input).reduce(function (newObj:any, key) {
        let val = input[key];
        let newVal = (typeof val === 'object') && val !== null ? ObjKeysToLowerCase(val) : val;
        newObj[key.toLowerCase()] = newVal;
        return newObj;
    }, {});
};