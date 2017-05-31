import _ from 'lodash';

export default (fna) => {
  const chromosomes = fna.split('>').filter(chromosome => /[a-z]/.test(chromosome));

  return chromosomes.map((chromosome) => {
    const lines = chromosome.split('\n').filter(line => /[A-Za-z]/.test(line));
    const headerLine = lines[0].replace(/^>/, '');
    const headers = headerLine.split('|');
    const description = headers.splice(-1)[0].trim();
    const symbolMatch = description.match(/\((.*?)\)/);
    const symbolObject = symbolMatch ? { symbol: symbolMatch[1] } : {};
    const identifiersKeys = headers.filter((value, i) => i % 2 === 0);
    const identifiersValues = headers.filter((value, i) => i % 2 === 1);
    const identifiers = _.zipObject(identifiersKeys, identifiersValues);
    const chromosomeInfo = description.match(/chromosome ([XY0-9]+)/);
    const chromosomeValues = chromosomeInfo ? { chromosome: chromosomeInfo[1] } : {};

    return Object.assign(
      {
        description,
        sequence: lines.splice(1).join(''),
        specie: description.match(/[A-Za-z]+ [A-Za-z]+/)[0],
      },
      chromosomeValues,
      identifiers,
      symbolObject
    );
  });
};
