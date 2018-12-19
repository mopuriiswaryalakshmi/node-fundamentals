var person = {
    firstName: 'ishu',
    lastName: 'lakshmi',
    city: 'banglore',
    details: function(){
        return `${this.firstName} lives in ${this.city}`;
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.details());

console.log(Object.keys(person));
console.log(object.values(person));

console.log(Object.keys(person).length);

// findOur if property exist

console.log(person.hasOwnProperty('firstName'));
Object.keys(person).includes('firstName');

// findOut if value exist
console.log(Object.values(person).includes('Lakshmi'));

// loop over an object
for(var key in person){
    // console.log(key, person[key]);
}

// forEach
Object.keys(person).forEach(function(key){
    console.log(person[key]);
});

// deleting the object from an object
delete person['details'];
console.log(person);

// add peroperty
person.skills = ['js','rb','py'];
console.log(person);


// when proprty to be added in a varibale
var newKey = 'bio';
person[newKey] = 'full stack developer';
console.log(person);

// count no of keys value pairs
console.log(Object.keys(person).length);

person.programmingLanguages = function(){
    return 'list of  languages known';
}

console.log(person.programmingLanguages());