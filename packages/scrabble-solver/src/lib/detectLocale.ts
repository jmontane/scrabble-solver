import { Locale } from '@scrabble-solver/types';

const detectLocale = (): Locale => {
  if (window.navigator.languages.includes('pl') || window.navigator.languages.includes('pl-PL')) {
    return Locale.PL_PL;
  }

  if (window.navigator.languages.includes('en-GB')) {
    return Locale.EN_GB;
  }

  if (window.navigator.languages.includes('fa') || window.navigator.languages.includes('fa-IR')) {
    return Locale.FA_IR;
  }

  if (window.navigator.languages.includes('fr-FR')) {
    return Locale.FR_FR;
  }

  if (window.navigator.languages.includes('ca') || window.navigator.languages.includes('ca-ES')) {
    return Locale.CA_ES;
  }

  return Locale.EN_US;
};

export default detectLocale;
