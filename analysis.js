const { iteratethrough } = require("./Lang/python-lang");

analysis_code = (ds) => {
     const words = ds.split("\r\n");
     iteratethrough(words);
     // console.log(words);
}

module.exports = { analysis_code };