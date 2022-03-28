import { isDate, isString, isNumber } from "./isType";

const format = (date: any, format: string, isUTC: any) => {
    if (!isNumber(date) && !isString(date) && !isDate(date)) {
        throw new Error("The first parameter must be number, string, Date object");
    }

    let d = date;

    if (isNumber(date) || isString(date)) {
        d = new Date(date);
    }

    if (!isString(format)) {
        return d.toString();
    }
    const year = isUTC
        ? d.getUTCFullYear().toString()
        : d.getFullYear().toString();
    const month = isUTC
        ? (d.getUTCMonth() + 1).toString()
        : (d.getMonth() + 1).toString();
    const day = isUTC ? d.getUTCDate().toString() : d.getDate().toString();
    const hour = isUTC ? d.getUTCHours().toString() : d.getHours().toString();
    const hour12 = (hour % 12).toString();
    const amOrPm = hour < 12 ? "AM" : "PM";
    const minute = isUTC
        ? d.getUTCMinutes().toString()
        : d.getMinutes().toString();
    const second = isUTC
        ? d.getUTCSeconds().toString()
        : d.getSeconds().toString();
    const millisecond = isUTC
        ? d.getUTCMilliseconds().toString()
        : d.getMilliseconds().toString();

    return format
        .replace(/(^|[^Y])YYYY([^Y]|$)/g, `$1${year}$2`)
        .replace(/(^|[^Y])YY([^Y]|$)/g, `$1${String(year).slice(-2)}$2`)
        .replace(/(^|[^M])MM([^M]|$)/g, `$1${month.padStart(2, "0")}$2`)
        .replace(/(^|[^M])M([^M]|$)/g, `$1${month}$2`)
        .replace(/(^|[^D])DD([^D]|$)/g, `$1${day.padStart(2, "0")}$2`)
        .replace(/(^|[^D])D([^D]|$)/g, `$1${day}$2`)
        .replace(/(^|[^H])HH([^H]|$)/g, `$1${hour.padStart(2, "0")}$2`)
        .replace(/(^|[^H])H([^H]|$)/g, `$1${hour}$2`)
        .replace(/(^|[^h])hh([^h]|$)/g, `$1${hour12.padStart(2, "0")}$2`)
        .replace(/(^|[^h])h([^h]|$)/g, `$1${hour12}$2`)
        .replace(/(^|[^A])A([^A]|$)/g, `$1${amOrPm}$2`)
        .replace(/(^|[^a])a([^a]|$)/g, `$1${amOrPm.toLowerCase()}$2`)
        .replace(/(^|[^m])mm([^m]|$)/g, `$1${minute.padStart(2, "0")}$2`)
        .replace(/(^|[^m])m([^m]|$)/g, `$1${minute}$2`)
        .replace(/(^|[^s])ss([^s]|$)/g, `$1${second.padStart(2, "0")}$2`)
        .replace(/(^|[^s])s([^s]|$)/g, `$1${second}$2`)
        .replace(
            /(^|[^S]+)([S]+)([^S]+|$)/g,
            (match: any, s1: any, s2: string | any[], s3: any) => {
                let msStr = millisecond.padStart(3, "0");
                for (let i = 3; i < s2.length; i++) {
                    msStr += "0";
                }
                msStr = msStr.slice(0, s2.length);
                return `${s1}${msStr}${s3}`;
            }
        );
};

export { format };