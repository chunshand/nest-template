import { Injectable, StreamableFile } from '@nestjs/common';
import Excel from "./lib/excel"
@Injectable()
export class OfficeService {

    /**
     * 快速创建一个简单的表格文件
     */
    createExcel(data: any[] = [], type?: string) {
        return Excel.create(data, type)
    }
}
