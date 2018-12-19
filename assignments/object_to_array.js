var obj = { a: 1, b: 2, c: 3 };
function entries(object){
    obj_array = [];
    for(var i in object){
        obj_array.push([i,object[i]]);
    }
    return obj_array;
}
console.log(entries(obj));


// var obj = {a: 1, b: 2, c: 3};

// function entries(object){
// 	obj_array = [];
// 	Object.keys(object).forEach(function(key){
// 		obj_array.push(key, object[key]);
//     });
//     return obj_array;
// }

// console.log(entries(obj));