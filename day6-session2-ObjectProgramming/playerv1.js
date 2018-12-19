function Player(){
    // properties
    // Methods
    this.firstName;
    this.lastName;
    this.runs;

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

var sachin = new Player();
sachin.firstName = 'Sachin';
sachin.lastName = 'Tendulkar';
sachin.runs = [40,50,60];
console.log(sachin.fullName());
console.log(sachin.calculateAvg());
