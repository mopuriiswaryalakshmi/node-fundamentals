var n1=10;
var n2=20;

//Function scope
// function add(){
//     return n1+n2
// }
// console.log(add());

// //Local Scope
// function add1(){
//     n1=100;
//     n2=200;
//     return n1+n2;
// }
// console.log(add1());
// console.log(n1,n2);


function add2(n1,n2){
    var n1=100;
    var n2=200;
    return n1+n2;
}
console.log(add2(n1,n2));
console.log(n1,n2);

