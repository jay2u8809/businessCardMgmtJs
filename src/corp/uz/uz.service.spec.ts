import { Test, TestingModule } from '@nestjs/testing';
import { UzService } from './uz.service';

describe('UzService', () => {
  let service: UzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UzService],
    }).compile();

    service = module.get<UzService>(UzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
