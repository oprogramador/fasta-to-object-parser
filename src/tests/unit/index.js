import expect from 'fna-parser/tests/expect';
import readFNA from 'fna-parser/index';
import realReadFNA from 'fna-parser/readFNA';

describe('index', () => {
  it('exports readFNA as default', () => {
    expect(readFNA).to.equal(realReadFNA);
  });
});
