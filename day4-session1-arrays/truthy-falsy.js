// falsy - false,'',undefined,0,NaN
// truthy - 1,2,'ishu',[],{},1,true

var values = [10,20,30,'',40,undefined,'ishu',[], -1,0, 1,true ];

values.forEach(function(value){
    if(value){
        console.log(value);
    }
});

function filterValuesArr(values){
    var truthy = [];
    var falsy = [];
    values.forEach(function(value){
        if(value){
            truthy.push(value);
        }else{
            falsy.push(value);
        }
    });
    return [truthy,falsy];
}
console.log(filterValuesArr(values));

console.log("filterValuesObj");

console.log("filterValuesObj");
function filterValuesArr(values){
    var truthy = [];
    var falsy = [];
    values.forEach(function(value){
        if(value){
            truthy.push(value);
        }else{
            falsy.push(value);
        }
    });
    return {
        truthy, 
        falsy
    }
}
console.log(filterValuesArr(values));


// function filterValuesArrayIshu(values){
//     var truthy = [];
//     var falsy = [];
//     values.forEach(function(value){
//         if(value){
//             truthy.value = value;
//         }else{
//             falsy.value = value;
//         }
//     });
//     return {
//         truthy, 
//         falsy
//     }
// }
// console.log(filterValuesArrayIshu(values));


function filterValuesHashIshu(values){
    var truthy = {};
    var falsy = {};
    values.forEach(function(value){
        if(value){
            truthy[value] = value;
        }else{
            falsy[value] = value;
        }
    });
    return {
        truthy, 
        falsy
    }
}
console.log(filterValuesHashIshu(values));
