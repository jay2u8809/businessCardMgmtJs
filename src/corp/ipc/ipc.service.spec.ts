import { Test, TestingModule } from '@nestjs/testing';
import { IpcService } from './ipc.service';

describe('IpcService', () => {
  let service: IpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IpcService],
    }).compile();

    service = module.get<IpcService>(IpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
