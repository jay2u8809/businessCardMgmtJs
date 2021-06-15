import { Test, TestingModule } from '@nestjs/testing';
import { IpcController } from './ipc.controller';

describe('IpcController', () => {
  let controller: IpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IpcController],
    }).compile();

    controller = module.get<IpcController>(IpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
