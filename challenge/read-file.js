const fs = require("node:fs");

function readFilePromise(filePath) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err); // Reject with the error
      } else {
        resolve(data); // Resolve with the file contents
      }
    });
  });

  return promise;
}

module.exports = { readFilePromise };
