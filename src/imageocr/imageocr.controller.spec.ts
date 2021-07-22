import { Test, TestingModule } from '@nestjs/testing';
import { ImageocrController } from './imageocr.controller';

describe('ImageocrController', () => {
  let controller: ImageocrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageocrController],
    }).compile();

    controller = module.get<ImageocrController>(ImageocrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
