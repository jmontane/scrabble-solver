import { Locale } from '@scrabble-solver/types';

import getCaEsWordList from './getCaEsWordList';
import getDeDeWordList from './getDeDeWordList';
import getEnGbWordList from './getEnGbWordList';
import getEnUsWordList from './getEnUsWordList';
import getEsEsWordList from './getEsEsWordList';
import getFaIrWordList from './getFaIrWordList';
import getFrFrWordList from './getFrFrWordList';
import getPlPlWordList from './getPlPlWordList';

const localeMap: Record<Locale, () => Promise<string[]>> = {
  [Locale.CA_ES]: getCaEsWordList,
  [Locale.DE_DE]: getDeDeWordList,
  [Locale.EN_GB]: getEnGbWordList,
  [Locale.EN_US]: getEnUsWordList,
  [Locale.ES_ES]: getEsEsWordList,
  [Locale.FA_IR]: getFaIrWordList,
  [Locale.FR_FR]: getFrFrWordList,
  [Locale.PL_PL]: getPlPlWordList,
};

const getWordList = (locale: Locale): Promise<string[]> => localeMap[locale]();

export default getWordList;
