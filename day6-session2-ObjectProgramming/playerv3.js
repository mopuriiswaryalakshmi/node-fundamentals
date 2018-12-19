// Concept------------->Passing arguments as HASH constucter when new object is created;

function Player(data){
    // properties
    // Methods
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.runs = data.runs || [];

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

var sachin = new Player({firstName: 'Sachin',runs: [40,50,60], lastName: 'Tendulkar'});
console.log(sachin.fullName());
console.log(sachin.calculateAvg());

var sachin = new Player({});
console.log(sachin.fullName());
// console.log(sachin.calculateAvg());
