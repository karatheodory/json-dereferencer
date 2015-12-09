const RefParser = require('json-schema-ref-parser');
const fs = require('fs');
const path = require('path');
const argv = require('optimist').argv;

const filePath = argv.i;
const fileExtension = filePath? path.extname(filePath) : undefined;

if (!filePath || fileExtension !== '.json') {
  console.error('Usage: ' + process.argv[1] + ' -i file.json');
  return;
}

const fileNameWithNoExtension = path.basename(filePath, '.json');
const outputFile = './' + fileNameWithNoExtension + '-result.json';

console.log('Processing file: ' + filePath, ', result: ' + outputFile);

RefParser.bundle(filePath)
  .then((schema) => {
    const schemaString = JSON.stringify(schema, null, 2);
    fs.writeFile(outputFile, schemaString, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Success');
      }
    });
  });
