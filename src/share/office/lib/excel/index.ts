// https://github.com/exceljs/exceljs/blob/master/README_zh.md
import { Workbook } from "exceljs";
export default {
    async create(data: any[] = [], type: string = "xsl"): Promise<Buffer> {
        const workbook = new Workbook();
        workbook.addWorksheet();
        const worksheet = workbook.getWorksheet(1);
        worksheet.addRows(data);
        let buff;
        if (type == "xsl") {
            // await workbook.xlsx.writeFile('./1.xls');
            buff = await workbook.xlsx.writeBuffer();
        } else if (type == 'csv') {
            // await workbook.xlsx.writeFile('./1.csv');
            buff = await workbook.csv.writeBuffer();
        }
        return Buffer.from(buff);
    }
}