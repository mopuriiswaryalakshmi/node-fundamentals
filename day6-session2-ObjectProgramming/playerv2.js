// Concept------------->Passing arguments and constucter() when new object is created;

function Player(firstName,lastName,runs){
    // properties
    // Methods
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.runs = runs || '';

    this.fullName = function(){
        return this.firstName+ ' '+ this.lastName;
    };

    this.calculateAvg = function(){
        var total = 0;
        this.runs.forEach(function(run){
            total += run;
        })
        return total / this.runs.length;
    };
}

var sachin = new Player("sachin","Tendulkar",[40,50,60]);
console.log(sachin.fullName());
console.log(sachin.calculateAvg());


