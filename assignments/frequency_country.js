// INPUT: frequency('abca');
// OUTPUT: {a: 2, b: 1, c: 1}

function frequency(input){
charecter_count = {};
if(input){
    array_charecters = input.split('');
    console.log(array_charecters);
    array_charecters.forEach(function(charecter){
        if(charecter_count[charecter]){
            charecter_count[charecter]++
        }else{
            charecter_count[charecter] = 1;
        }
    });
}
return charecter_count;
}
console.log(frequency('abca'));

// function frequency(input){
// charecter_count = {};
// // if(input){
//     charecters = input.split('');
//     // console.log(array_charecters);
//     var charecters = charecters.filter(charecter => charecter)
//     // return charecters;
//     if(charecter_count[charecters]){
//         charecter_count[charecters]++;
//     }
//     else{
//      charecter_count[charecters] = 1;
//     }
// // }
// return charecter_count;
// }
// console.log(frequency('abca'));
