# doc2pdf

Convert DOC to PDF.

## Install

```sh
$ apt-get install unoconv -y
$ npm i doc2pdf -S
```

## Usage

```js
const path = require('path');
const fs = require('fs');
const doc2pdf = require('doc2pdf');

// read buffer from .docx file
// sync operation is for demonstration only
// use async operation in production mode
const buffer = fs.readFileSync('./file.docx');

// create pdf from buffer
doc2pdf(buffer).then((pdf) => {
  console.log(pdf); // <Buffer>
});

// create pdf from file
doc2pdf('./file.docx').then((pdf) => {
  console.log(pdf); // <Buffer>
});
```

## License

MIT.
