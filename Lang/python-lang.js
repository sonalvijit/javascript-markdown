const keyword = ["from","import","return","if","else","def","__name__"]

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