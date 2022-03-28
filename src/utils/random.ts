/**
 * 随机字符串
 * @param len 位数
 * @returns 
 */
export function randomString(len: number = 4) {
    let $chars: string = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (let i: number = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

/**
 * 随机数字
 * @param len 位数
 * @returns 
 */
export function randomNumber(len: number = 4) {
    let $chars: string = '23456789';
    var maxPos = $chars.length;
    var pwd = '';
    for (let i: number = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
