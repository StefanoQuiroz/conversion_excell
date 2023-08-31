import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import axios from 'axios';

// Simulamos la respuesta de la API
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should fetch commits', async () => {
    const response = {
      data: [
        {
          sha: 'abc123',
          html_url: 'https://github.com/usuario/repositorio/commit/abc123',
        },
      ],
    };
    mockedAxios.get.mockResolvedValue(response);

    const commits = await service.getCommits();
    expect(commits).toEqual(response.data);
  });
});
