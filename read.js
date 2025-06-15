const { analysis_code } = require("./analysis");
const fs = require('fs');

fs.readFile('./snippet.txt.py', 'utf-8', (err, data) => {
     if(err){
          console.error("Error reading file:", err);
          return;
     }
     analysis_code(data);
});