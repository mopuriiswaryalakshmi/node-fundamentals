var person = {
    //property: value
    //key: value
    //key: string,number,boolean,function, undefined, object,array
    firstName: 'ishu',
    lastName: 'lakshmi',
    city: 'banglore',
    cities: ['banglore','kadapa'],
    skills: ['js','py', 'rb'],
    //whenever you assign a function to a property inside an object, it is known as method
    details: function(){
        //console.log(Object.keys(this));
        return this.firstName + ' ' + this.lastName;
    },
    greet: function(type){
        if(type == 'casual'){
            return this.firstName + ' says hi';
        }else if(type == "formal"){
            return this.firstName + ' says hello';
        }
    },

    //option 1
    languagesKnown: function(){
        that = this;
        this.skills.forEach(function(skill){
            console.log(that.firstName + ' knows ' + skill)
        });
    },

    //option 2
    livedIn: function(){
        this.cities.forEach(function(city){
            console.log(`${this.firstName} has lived in ${city}`)
        }.bind(this));
    },

    //option 3
    programming: function(){
        this.skills.forEach((skill) => {
            console.log(`${this.firstName} knows ${skill}`)
        });
    },

    //option 4 - stick to for loop
    citiesLived: function(){
        for(var i=0; i < this.cities.length; i++){
            console.log(`${this.firstName} has lived in ${this.cities[i]}`);
        }
    }
};


console.log(person);
console.log(person.firstName); //ishu
console.log(person.details());
console.log(person.greet('casual'));
console.log(person.greet('formal'));
console.log(person.languagesKnown());
person.livedIn();
person.programming();
person.citiesLived();
