export const toSentenceCase = (str = '') =>
    (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, ' ');

export const snakeCaseToTitleCase = (str = '') =>
    str.replace(/^(.)|-+(.)/g, (_, p1, p2) => (p1 ? p1.toUpperCase() : ` ${p2.toUpperCase()}`));

export const titleCaseToSnakeCase = (str = '') => str.replace(/\s/g, '-').toLowerCase();

export const optmizeGQLString = (str = '') =>
    str.replace(/(\r\n|\n|\r)/gm, '').replace(/ +(?= )/g, '');
