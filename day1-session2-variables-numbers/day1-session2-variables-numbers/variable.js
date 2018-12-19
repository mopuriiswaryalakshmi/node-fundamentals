// variables to store some kind of information
// if we not assigned value to variable by default it hold undefined

var name;
console.log(name);  //undefined
// value can be strings,numbers,arrays,objects,undefined,null
//all callbacks ara HIGHERORDERFUNCTION

var n1 = 10, n2 = 20, n3 = 30;
var city = 'banglore';
console.log(city);
var temerature = 20.4;
var population = 1000000;
var placesToVisit = ['mg road', 'lalbagh', 'cubbon park'];
var person = {
    firstName: 'ishu',
    lastname: 'lakshmi'
}
console.log(person);

// function
// function expression --> returning value of function(assigning proprty value to  var)
// variables can hold function,
var details = function(){
    return 'in a function'
}

// returning to function
console.log(details);

// invoking of function
console.log(details());

// function definition / function declaration
function add(){

}
add();


