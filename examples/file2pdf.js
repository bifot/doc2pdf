const path = require('path');
const doc2pdf = require('../src');

const file = path.resolve('examples', 'dist', 'file.docx');

doc2pdf(file).then((buffer) => {
  console.log(buffer); // <Buffer> (pdf)
});
