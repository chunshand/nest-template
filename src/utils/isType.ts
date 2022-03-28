const isType = function (o) {
    let s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

export const isPrimitive = (o) => {
    let name = isType(o);
    return (
        name === "string" ||
        name === "number" ||
        name === "symbol" ||
        name === "boolean"
    );
};
export const isDate = (o) => {
    return isType(o) === "date";
};
export const isNumber = (o) => {
    return isType(o) === "number";
};
export const isString = (o) => {
    return isType(o) === "string";
};
export const isObject = (o) => {
    return isType(o) === "object";
};
export const isArray = (o) => {
    return isType(o) === "array";
};
export const isBuffer = (o) => {
    return isType(o) === "buffer";
};
