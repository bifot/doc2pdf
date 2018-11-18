const path = require('path');
const fs = require('fs');
const doc2pdf = require('../src');

const file = path.resolve('examples', 'dist', 'example.docx');
const buffer = fs.readFileSync(file);

doc2pdf(buffer).then((buffer) => {
  console.log(buffer); // <Buffer> (pdf)
});
