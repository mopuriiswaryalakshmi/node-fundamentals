// importence of var 
count = 1
console.log(count);

function someFunction(){
    // polluting the global scope
    count = 10;
    // varInsideFunc = 'hello';
    console.log(count);
}

someFunction();
console.log(count);

// output
// 1
// 10
// 10


var count = 1
console.log(count);

function someFunction(){
    // polluting the global scope
    var count = 10;
    // varInsideFunc = 'hello';
    console.log(count);
}

someFunction();
console.log(count);

// output
// 1
// 10
// 1