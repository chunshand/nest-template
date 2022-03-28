import { Module } from '@nestjs/common';
import { TasksService } from './task.service';
@Module({
    providers: [TasksService]
})
export class TaskModule { }
