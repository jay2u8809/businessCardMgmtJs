import { Test, TestingModule } from '@nestjs/testing';
import { UzController } from './uz.controller';

describe('UzController', () => {
  let controller: UzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UzController],
    }).compile();

    controller = module.get<UzController>(UzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
