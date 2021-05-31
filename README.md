# fasta-to-object-parser

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/oprogramador/fasta-to-object-parser.svg?branch=master)](https://travis-ci.com/oprogramador/fasta-to-object-parser
)

[![NPM status](https://nodei.co/npm/fasta-to-object-parser.png?downloads=true&stars=true)](https://npmjs.org/package/fasta-to-object-parser
)

## How to install?
`npm install --save fasta-to-object-parser`

## How to use?
```js
    const fasta = `
>gi|528476511|ref|NW_004929286.1| Homo sapiens chromosome 1 genomic scaffold, alternate assembly CHM1_1.1
TAACCCTA
CCTAA
    `;
    const data = readFASTA(fasta);
```
It returns data in the following format:
```js
[
  {
    chromosome: '1',
    description: 'Homo sapiens chromosome 1 genomic scaffold, alternate assembly CHM1_1.1',
    gi: '528476511',
    ref: 'NW_004929286.1',
    sequence: 'TAACCCTACCTAA',
    specie: 'Homo sapiens',
  },
]
```
