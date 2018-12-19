var sachin = {
    firstName: 'sachin',
    lastNAme: 'tendulkar',
    runs: [40,50,60],
    fullName: function(){
        return this.firstName+' '+this.lastName;
    },
    calculateAvg: function(){
        var total = 0;
        this.runs.forEach(function(run){
            total += run
        });
        return total/this.runs.length;
    }
};

console.log(typeof sachin);

console.log(sachin.fullName());
console.log(sachin.calculateAvg());


var virat = {
    firstName: 'sachin',
    lastNAme: 'tendulkar',
    runs: [40,50,60],
    fullName: function(){
        return this.firstName+' '+this.lastName;
    },
    calculateAvg: function(){
        var total = 0;
        this.runs.forEach(function(run){
            total += run
        });
        return total/this.runs.length;
    }
};

console.log(typeof virat);

console.log(virat.fullName());
console.log(virat.calculateAvg());