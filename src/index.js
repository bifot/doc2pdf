const fs = require('fs');
const path = require('path');
const util = require('util');
const cp = require('child_process');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const unlink = util.promisify(fs.unlink);
const exec = util.promisify(cp.exec);

module.exports = async (doc) => {
  const getPath = (extension) => {
    return path.join('/', 'tmp', `${Math.random().toString().substr(2)}.${extension}`);
  };

  const isBuffer = doc instanceof Buffer;
  const input = isBuffer ? getPath('docx') : doc;
  const output = input.replace(path.extname(input), '.pdf');

  if (isBuffer) {
    await writeFile(input, doc);
  }

  await exec(`doc2pdf ${input}`);

  if (isBuffer) {
    await unlink(input);
  }

  const buffer = await readFile(output);

  await unlink(output);

  return buffer;
};
