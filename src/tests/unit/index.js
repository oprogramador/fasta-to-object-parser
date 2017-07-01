import expect from 'fasta-parser/tests/expect';
import readFASTA from 'fasta-parser/index';
import realReadFNA from 'fasta-parser/readFASTA';

describe('index', () => {
  it('exports readFASTA as default', () => {
    expect(readFASTA).to.equal(realReadFNA);
  });
});
