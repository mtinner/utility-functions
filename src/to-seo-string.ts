export const toNormalizedString = (value: string) =>
  value
    .toLowerCase()
    .replace(/ - /g, '-')
    .replace(/–/g, '-')
    .replace(/\./g, '-')

    // utf-8 non breaking space
    .replace(/\xa0/g, '-')

    // whitespace characters
    .replace(/\s/g, '-')

    // umlauts, accents and diacritics
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/[éèê]/g, 'e')
    .replace(/[áàâ]/g, 'a')
    .replace(/[úùû]/g, 'u')
    .replace(/[óòô]/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/æ/g, 'ae')
    .replace(/œ/g, 'oe');

export const toSeoString = (value: string = '') =>
  toNormalizedString(value)
    // special characters (except "-", "_")
    .replace(/[^a-zA-Z0-9\-_]*/g, '');
