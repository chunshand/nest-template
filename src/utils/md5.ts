const crypto = require('crypto');
/**
 * md5
 * @param value string 加密字符
 * @returns 
 */
export function md5_encode(value: string) {
    return crypto.createHash("md5").update(value).digest("hex");
}