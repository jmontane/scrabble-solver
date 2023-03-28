import { request } from '../lib';

const crawlSpanish = (word: string): Promise<string> => {
  return request({
    protocol: 'https',
    hostname: 'dlc.iec.cat',
    path: `/results.asp?txtEntrada=${encodeURIComponent(word)}`,
  });
};

export default crawlSpanish;
