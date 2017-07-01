import expect from 'fasta-parser/tests/expect';
import readFNA from 'fasta-parser/index';
import realReadFNA from 'fasta-parser/readFNA';

describe('index', () => {
  it('exports readFNA as default', () => {
    expect(readFNA).to.equal(realReadFNA);
  });
});
