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