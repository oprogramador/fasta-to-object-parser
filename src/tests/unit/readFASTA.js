import expect from 'fasta-to-object-parser/tests/expect';
import readFASTA from 'fasta-to-object-parser/readFASTA';

describe('readFASTA', () => {
  it('returns proper data for multiple chromosomes', () => {
    const fasta = `
>ref|NG_012059.2| Homo sapiens collagen type IV alpha 6 chain (COL4A6), RefSeqGene on chromosome X  
GGCCAAGG
GCA
>ref|NG_016148.1| Homo sapiens neuropeptide Y (NPY), RefSeqGene on chromosome 7
CAGGTAAA
TATTTAAG
TA
>ref|NG_016284.1| Homo sapiens solute carrier family 2 member 10 (SLC2A10), RefSeqGene on chromosome 20
TAAA
>ref|NG_013340.1| Homo sapiens NK2 homeobox 5 (NKX2-5), RefSeqGene on chromosome 5
CTGTGAGA
TTCCCTC
>ref|NG_030029.1| Homo erectus interferon alpha 21 (IFNA21), RefSeqGene on chromosome 9
TGTCC
    `;
    const data = readFASTA(fasta);

    expect(data).to.deep.equal([
      {
        chromosome: 'X',
        description: 'Homo sapiens collagen type IV alpha 6 chain (COL4A6), RefSeqGene on chromosome X',
        ref: 'NG_012059.2',
        sequence: 'GGCCAAGGGCA',
        specie: 'Homo sapiens',
        symbol: 'COL4A6',
      },
      {
        chromosome: '7',
        description: 'Homo sapiens neuropeptide Y (NPY), RefSeqGene on chromosome 7',
        ref: 'NG_016148.1',
        sequence: 'CAGGTAAATATTTAAGTA',
        specie: 'Homo sapiens',
        symbol: 'NPY',
      },
      {
        chromosome: '20',
        description: 'Homo sapiens solute carrier family 2 member 10 (SLC2A10), RefSeqGene on chromosome 20',
        ref: 'NG_016284.1',
        sequence: 'TAAA',
        specie: 'Homo sapiens',
        symbol: 'SLC2A10',
      },
      {
        chromosome: '5',
        description: 'Homo sapiens NK2 homeobox 5 (NKX2-5), RefSeqGene on chromosome 5',
        ref: 'NG_013340.1',
        sequence: 'CTGTGAGATTCCCTC',
        specie: 'Homo sapiens',
        symbol: 'NKX2-5',
      },
      {
        chromosome: '9',
        description: 'Homo erectus interferon alpha 21 (IFNA21), RefSeqGene on chromosome 9',
        ref: 'NG_030029.1',
        sequence: 'TGTCC',
        specie: 'Homo erectus',
        symbol: 'IFNA21',
      },
    ]);
  });

  it('returns proper data for single chromosome', () => {
    const fasta = `
>ref|NG_012059.2| Homo sapiens collagen type IV alpha 6 chain (COL4A6), RefSeqGene on chromosome X
GGCCAAGG
GCA
    `;
    const data = readFASTA(fasta);

    expect(data).to.deep.equal([
      {
        chromosome: 'X',
        description: 'Homo sapiens collagen type IV alpha 6 chain (COL4A6), RefSeqGene on chromosome X',
        ref: 'NG_012059.2',
        sequence: 'GGCCAAGGGCA',
        specie: 'Homo sapiens',
        symbol: 'COL4A6',
      },
    ]);
  });

  it('returns proper data with no chromosome info', () => {
    const fasta = `
>ref|NG_012059.2| Homo sapiens collagen type IV alpha 6 chain (COL4A6)
GGCCAAGG
GCA
    `;
    const data = readFASTA(fasta);

    expect(data).to.deep.equal([
      {
        description: 'Homo sapiens collagen type IV alpha 6 chain (COL4A6)',
        ref: 'NG_012059.2',
        sequence: 'GGCCAAGGGCA',
        specie: 'Homo sapiens',
        symbol: 'COL4A6',
      },
    ]);
  });

  it('reads data with multiple identifiers', () => {
    const fasta = `
>gi|528476511|ref|NW_004929286.1| Homo sapiens chromosome 1 genomic scaffold, alternate assembly CHM1_1.1
TAACCCTA
CCTAA
    `;
    const data = readFASTA(fasta);

    expect(data).to.deep.equal([
      {
        chromosome: '1',
        description: 'Homo sapiens chromosome 1 genomic scaffold, alternate assembly CHM1_1.1',
        gi: '528476511',
        ref: 'NW_004929286.1',
        sequence: 'TAACCCTACCTAA',
        specie: 'Homo sapiens',
      },
    ]);
  });
});
