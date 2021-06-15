import { Module } from '@nestjs/common';
import { CorpService } from './corp.service';
import { UzController } from './uz/uz.controller';
import { IpcController } from './ipc/ipc.controller';
import { IpcService } from './ipc/ipc.service';
import { UzService } from './uz/uz.service';
import { IpcModule } from './ipc/ipc.module';
import { UzModule } from './uz/uz.module';

@Module({
  providers: [CorpService, IpcService, UzService],
  controllers: [UzController, IpcController],
  imports: [IpcModule, UzModule]
})
export class CorpModule {}
