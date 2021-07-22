import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageocrController } from './imageocr/imageocr.controller';
import { ImageocrService } from './imageocr/imageocr.service';
import { ImageocrModule } from './imageocr/imageocr.module';

@Module({
  imports: [
    ImageocrModule
  ],
  controllers: [AppController, ImageocrController],
  providers: [AppService, ImageocrService],
})
export class AppModule {}
