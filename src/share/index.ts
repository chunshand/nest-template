import DBModule from "./db"
import ScheduleModule from "./schedule/schedule.module"
import { TaskModule } from "./schedule/task.module";

// 此处导出 则为导入到Appmodule 上
export default [
    DBModule,
    ScheduleModule,
    TaskModule
];