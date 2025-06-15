function EntryPoint(code) {
     return code;
}

let code_test = `def string(fcuk):\n\tnum:string = f"dsds{fcuk}"\n\treturn num`;
let a = EntryPoint(code_test);
console.log(a);