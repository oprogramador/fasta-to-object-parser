import expect from 'fasta-to-object-parser/tests/expect';
import writeFASTA from 'fasta-to-object-parser/writeFASTA';

/* eslint-disable max-len */

describe('writeFASTA', () => {
  it('writes proper data for multiple chromosomes', () => {
    const expectedFasta = `>ref|NG_012059.2| Homo sapiens collagen type IV alpha 6 chain (COL4A6), RefSeqGene on chromosome X
TGGGCGACGTGGGACGGGAATGGCATGTCCTAATCAGGCCGCTGTGGCCTCACTCCCACGGGAGCCAACG
CCCCGCGAGAACACTGAAACTGTATGGCTATCAACAGGCTTCAGCCAACC
>ref|NG_016148.1| Homo sapiens neuropeptide Y (NPY), RefSeqGene on chromosome 7
ACTCAGAGAGTCTACATCCACGTCTGAACAGTACTCTCGGGT
>ref|NG_016284.1| Homo sapiens solute carrier family 2 member 10 (SLC2A10), RefSeqGene on chromosome 20
TTAGTGAGCTGCTGCATAGGAACGTCCGTATGATCCCGGTGGCCTAACGAACGGATGCAAGCGTGACTTG
GGGACATAGCTATGCTTTCGTAGTGTTTGGACGAGAGCGCTT
>ref|NG_013340.1| Homo sapiens NK2 homeobox 5 (NKX2-5), RefSeqGene on chromosome 5
TACTAGTTGTGACAACACGCTAAGTATCTTTTCTGAAGATTTTGCCCGTTTACGTATTGCGCGCTAGGAT
TGCCAAGGACAAAGACTCACCACGACGTCACTGTCAGTCCTCCACAACGATCCGTACGCTGAAGTAAGTG
GGCAAGTTTAAGAG
>ref|NG_030029.1| Homo erectus interferon alpha 21 (IFNA21), RefSeqGene on chromosome 9
TTGAAACCGTTGCGAATGTGCGCTACTACCGTATTTTTCACTGTATTACATAATACCAAGCATTCTAATT
TCTCCCATGGGTCAGCGTATTATGTCGTACATCCTGTTTAACAAAT`;
    const data = [
      {
        description: 'Homo sapiens collagen type IV alpha 6 chain (COL4A6), RefSeqGene on chromosome X',
        ref: 'NG_012059.2',
        sequence: 'TGGGCGACGTGGGACGGGAATGGCATGTCCTAATCAGGCCGCTGTGGCCTCACTCCCACGGGAGCCAACGCCCCGCGAGAACACTGAAACTGTATGGCTATCAACAGGCTTCAGCCAACC',
      },
      {
        description: 'Homo sapiens neuropeptide Y (NPY), RefSeqGene on chromosome 7',
        ref: 'NG_016148.1',
        sequence: 'ACTCAGAGAGTCTACATCCACGTCTGAACAGTACTCTCGGGT',
      },
      {
        description: 'Homo sapiens solute carrier family 2 member 10 (SLC2A10), RefSeqGene on chromosome 20',
        ref: 'NG_016284.1',
        sequence: 'TTAGTGAGCTGCTGCATAGGAACGTCCGTATGATCCCGGTGGCCTAACGAACGGATGCAAGCGTGACTTGGGGACATAGCTATGCTTTCGTAGTGTTTGGACGAGAGCGCTT',
      },
      {
        description: 'Homo sapiens NK2 homeobox 5 (NKX2-5), RefSeqGene on chromosome 5',
        ref: 'NG_013340.1',
        sequence: 'TACTAGTTGTGACAACACGCTAAGTATCTTTTCTGAAGATTTTGCCCGTTTACGTATTGCGCGCTAGGATTGCCAAGGACAAAGACTCACCACGACGTCACTGTCAGTCCTCCACAACGATCCGTACGCTGAAGTAAGTGGGCAAGTTTAAGAG',
      },
      {
        description: 'Homo erectus interferon alpha 21 (IFNA21), RefSeqGene on chromosome 9',
        ref: 'NG_030029.1',
        sequence: 'TTGAAACCGTTGCGAATGTGCGCTACTACCGTATTTTTCACTGTATTACATAATACCAAGCATTCTAATTTCTCCCATGGGTCAGCGTATTATGTCGTACATCCTGTTTAACAAAT',
      },
    ];
    const fasta = writeFASTA(data);

    expect(fasta).to.equal(expectedFasta);
  });

  it('writes proper data for single chromosome', () => {
    const expectedFasta = `>ref|NG_012059.2| Homo sapiens collagen type IV alpha 6 chain (COL4A6), RefSeqGene on chromosome X
TCCGGACAGGGTCGGTTTGTAACTCGTGCGTTTTATTGCTACAGTGCGAGAAAGATCATCTTACTCGTAA
GGCTCAGGGGGCAGTCCCCTTA`;
    const data = [
      {
        description: 'Homo sapiens collagen type IV alpha 6 chain (COL4A6), RefSeqGene on chromosome X',
        ref: 'NG_012059.2',
        sequence: 'TCCGGACAGGGTCGGTTTGTAACTCGTGCGTTTTATTGCTACAGTGCGAGAAAGATCATCTTACTCGTAAGGCTCAGGGGGCAGTCCCCTTA',
      },
    ];
    const fasta = writeFASTA(data);

    expect(fasta).to.equal(expectedFasta);
  });

  it('writes data with multiple identifiers', () => {
    const expectedFasta = `>gi|528476511|ref|NW_004929286.1| Homo sapiens chromosome 1 genomic scaffold, alternate assembly CHM1_1.1
AAGAAGACCTTGAGGCATCCCATATCTGGACTATCAGGAGCTAATTAGGTCCCTGCAATTCATAAGACAC
CGGAGCGCGTTCACACTGTGCCAAATTATAACGAGAGAAATA`;
    const data = [
      {
        description: 'Homo sapiens chromosome 1 genomic scaffold, alternate assembly CHM1_1.1',
        gi: '528476511',
        ref: 'NW_004929286.1',
        sequence: 'AAGAAGACCTTGAGGCATCCCATATCTGGACTATCAGGAGCTAATTAGGTCCCTGCAATTCATAAGACACCGGAGCGCGTTCACACTGTGCCAAATTATAACGAGAGAAATA',
      },
    ];
    const fasta = writeFASTA(data);

    expect(fasta).to.equal(expectedFasta);
  });
});
