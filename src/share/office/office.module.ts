import { Module } from '@nestjs/common';
import { OfficeService } from './office.service';

@Module({
  providers: [OfficeService],
  exports: [OfficeService]
})
export class OfficeModule { }
