#!/bin/bash
set -e

cd `dirname $(which $0)`
cd ..

path=node_modules/fasta-to-object-parser
mkdir -p node_modules
rm -f $path
ln -s ../${APP_DIR:=build} $path
