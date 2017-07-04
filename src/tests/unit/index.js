import readFASTA, { writeFASTA } from 'fasta-to-object-parser/index';
import expect from 'fasta-to-object-parser/tests/expect';
import realReadFASTA from 'fasta-to-object-parser/readFASTA';
import realWriteFASTA from 'fasta-to-object-parser/writeFASTA';

describe('index', () => {
  it('exports readFASTA as default', () => {
    expect(readFASTA).to.equal(realReadFASTA);
  });

  it('exports writeFASTA', () => {
    expect(writeFASTA).to.equal(realWriteFASTA);
  });
});
