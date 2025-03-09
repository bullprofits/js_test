var globalVar = "im a global variable";
let globalLet = "Im also a global variable but scoped with let";
const globalConst = "Im a global constant";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

{
    var blockVar = "Im a block scoped var";
    let blockLet = "Im a block-scoped let";
    const blockConst = "Im a block scoped const";
    console.log(blockVar);
    console.log(blockLet);

}

function show(){
    var functionVar = "Im a block-scoped var";
    let functionLet = "im a block scopre let";
    const functionConst = "im a block-scoped const";
}

show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);



