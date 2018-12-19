// primitive type - numbers, string, undefined, null --> on numbers we cant call any methods like floor,ceil,round..
// it always depend on math object
// just values,doesnt hold any properties or method
// ruby
// n2 = 19.3
// => 19.3
// >n2.round
// =>19

// js
var n1 = 10, n2 = 19.3, n3 = 21.3;
n2.round();
// output -> n2.round is not a function
console.log(Math.round(n2)); //19


// object type - arrays, objects, functions 
// values that holds/has properties and methods
numbers = [10,20,30];
numbers.push(40);
