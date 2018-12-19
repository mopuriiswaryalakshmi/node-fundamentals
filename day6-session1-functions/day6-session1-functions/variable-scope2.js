var n1=10;
var n2=20;

// 1.If n3(variable) is not defined 
function add(n1,n2){
    n1=100;
    n2=200;
    return n1+n2+n3;         //ReferenceError: n3 is not defined(because n3 is not defined in local or global)
}

console.log(add(n1,n2));


// 2.Variable result scope cannot be outside of function
function add1(n1,n2){
    var result = n1+n2;
    return result;
}

console.log(add1(n1,n2));
console.log(result);                //ReferenceError: result is not defined