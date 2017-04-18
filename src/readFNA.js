export default (fna) => {
  const chromosomes = fna.split('>').filter(chromosome => /[a-z]/.test(chromosome));

  return chromosomes.map((chromosome) => {
    const lines = chromosome.split('\n').filter(line => /[A-Za-z]/.test(line));
    const description = lines[0].split('|').splice(-1)[0].trim();

    return {
      chromosome: description.match(/chromosome ([XY0-9]+)/)[1],
      description,
      ref: lines[0].split('|')[1],
      sequence: lines.splice(1).join(''),
      specie: description.match(/[A-Za-z]+ [A-Za-z]+/)[0],
      symbol: description.match(/\((.*?)\)/)[1],
    };
  });
};
