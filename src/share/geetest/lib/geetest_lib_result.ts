// sdk lib包的返回结果信息。
export default class GeetestLibResult {
    private status: number;
    private data: object;
    private msg: string;
    constructor() {
        this.status = 0; // 成功失败的标识码，1表示成功，0表示失败
        this.data = {}; // 返回数据，对象
        this.msg = ""; // 备注信息，如异常信息等
    }

    setAll(status: number, data: string, msg: string) {
        this.status = status;
        this.data = JSON.parse(data);
        this.msg = msg;
    }

    toString() {
        return `GeetestLibResult{status=${this.status}, data=${JSON.stringify(this.data)}, msg=${this.msg}}`;
    }

    toRes() {
        return {
            status: this.status,
            data: this.data,
            msg: this.msg
        }
    }
}