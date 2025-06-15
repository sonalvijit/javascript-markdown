const keyword = ['False', 'True', 'None', 'and', 'or', 'not', 'if', 'elif', 'else', 'while', 'for', 'break', 'continue', 'def', 'return', 'lambda', 'yield', 'import', 'from', 'as', 'class', 'try', 'except', 'finally', 'raise', 'assert', 'with', 'pass', 'global', 'nonlocal', 'del', 'async', 'await', 'is', 'in'] // #c586bb

const operators = ["and", "or", "not", "is", "is not", "in", "not in"] // #569ece
const decorator = ["@"] // #e0d0ac
const purple_op = ["True", "False", "None", "self", "cls", "__name__", "__main__"] // #886ce3
const python_function = "#e0d0ac";// #e0d0ac

iteratethrough = (code_string) => {
     // code_string.forEach((line, index) => {
     //      console.log(`${index}: ${line}`);
     // });

     code_string.forEach((line, index)=>{
          const split_ = line.split(" ");
          for (const line of split_){
               if (keyword.includes(line)){
                    console.log(`${line}: keyword`);
               }
          }
          console.log(split_);
     });
};

module.exports = { iteratethrough };