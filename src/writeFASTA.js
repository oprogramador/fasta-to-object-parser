import _ from 'lodash';

const encodeIdentifier = (object, key) => `${object[key] ? `${key}|${object[key]}|` : ''}`;

function writeFASTA(data) {
  const lineLength = 70;

  return data.map(object => `>${encodeIdentifier(object, 'gi')}${encodeIdentifier(object, 'ref')} ${object.description}
${_.chunk(object.sequence, lineLength).map(array => array.join('')).join('\n')}`)
    .join('\n');
}

export default writeFASTA;
