var numbers = [10,15,20,30];

function firstGreaterThan(numbers,num){
    var result;
    for(var i=0; i < numbers.length; i++){
        if(numbers[i] > num){
            result = number[i];
            break;
        }
    }
    return result;
}

console.log(firstGreaterThan(numbers,50))

function findGreater(numbers,num){
    var result = numbers.find(function(n){
        return n > num;
    });
    return result;

    //es6
    //return numbers.find(n => n > num);
}
console.log(findGreater(numbers,50))
