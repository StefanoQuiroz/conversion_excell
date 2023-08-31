import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getCommits() {
    const url =
      'https://api.github.com/repos/JoacoMaurtua/Nebulabs-img-generator/commits';

    const response = await axios.get(url);
    return response.data;
  }
}
