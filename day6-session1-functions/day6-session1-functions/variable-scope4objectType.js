// COncept----------->Object Type will change globalType values
// -------->Privmitives type wont change globlType values
var numbers = [10,20];

// pass by reference
function addToNum(numbers){
    console.log('inside function before pushing', numbers);
    numbers.push(30,40);
    console.log('inside function after pushing', numbers);
    return numbers;
}

console.log('before function ', numbers);
console.log(addToNum(numbers));


var person={
    firstName: 'rose'
}

function changeFirstName(person){
    person.firstName = 'ishu';
}
console.log(changeFirstName(person));