import expect from 'fasta-to-object-parser/tests/expect';
import readFASTA from 'fasta-to-object-parser/index';
import realReadFNA from 'fasta-to-object-parser/readFASTA';

describe('index', () => {
  it('exports readFASTA as default', () => {
    expect(readFASTA).to.equal(realReadFNA);
  });
});
