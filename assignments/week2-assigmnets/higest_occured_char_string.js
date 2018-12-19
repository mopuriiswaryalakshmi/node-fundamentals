
function highest_char_count(string){
    counter = {};

for (var i = 0, len = string.length; i < len; i += 1) {
    counter[string[i]] = (counter[string[i]] || 0) + 1;
}

// var biggest = -1, number;
// for (var key in counter) {
//     if (counter[key] > biggest) {
//         biggest = counter[key];
//         number = key;
//     }
// }
return counter;
}

console.log(highest_char_count("355385"))