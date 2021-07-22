import { Test, TestingModule } from '@nestjs/testing';
import { ImageocrService } from './imageocr.service';

describe('ImageocrService', () => {
  let service: ImageocrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageocrService],
    }).compile();

    service = module.get<ImageocrService>(ImageocrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
