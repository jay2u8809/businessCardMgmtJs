import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorpController } from './corp/corp.controller';
import { CorpModule } from './corp/corp.module';

@Module({
  imports: [CorpModule],
  controllers: [AppController, CorpController],
  providers: [AppService],
})
export class AppModule {}
