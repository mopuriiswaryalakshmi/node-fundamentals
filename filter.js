var numbers = [10,20,30,15,25];

// function findEvents(numbers){
//     var evens = [];
//     numbers.forEach(function(num){
//         if(num % 2 == 0){
//             evens.push(num);
//         }
//     });
//     return evens;
// }

// console.log(findEvens(numbers)); //[10,20,30]

//declarative prog - imple

function evensFilter(numbers){

    // es5
    var result = numbers.filter(funtion(num){
        return num % 2 == 0;
    });

    //es6 () => {} == function(){} - 2015
    //return numbers.filter(num => num % 2 == 0 );
}
console.log(evensFilter(numbers))