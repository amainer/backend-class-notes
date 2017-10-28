const fileIO = {
  createFile,
  readFile,
  appendFile,
  deleteFile
}

const path = require('path')
const fs = require('fs');

// createFile('New File', 'Hello World');

function createFile(fileName, msg){
  fs.writeFileSync(fileName, msg);
  return fs.readFileSync(fileName, 'utf-8');
}

function readFile(fileName) {
  return fs.readFileSync(fileName, 'utf-8');
}

function appendFile(fileName, msg = "") {
  appendMessage = '\n' + msg
  fs.appendFileSync(fileName, appendMessage);
  return fs.readFileSync(fileName, 'utf-8');
}

function deleteFile(fileName) {
  let filePath = path.resolve(fileName)
  fs.unlinkSync(filePath);
  return console.log("Deletion Complete");
}

module.exports = fileIO;
