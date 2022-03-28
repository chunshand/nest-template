import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);


    @Cron('*/2 * * * * *')
    handleCron() {
        this.logger.debug('定时任务例子 每两秒执行一次');
    }
}


// @Cron('*/2 * * * * *') 2秒执行一次
// @Cron('* * * * * *') 1秒执行一次
// @Cron('0 * * * * *') 每分钟执行一次
// @Cron('0 0 * * * *') 每小时执行一次