function anagramCheck(a,b){
    var a = a.toUpperCase();
    var b = b.toUpperCase();
    var first_word = a.split("");
    var second_word = b.split("");
    return first_word.filter(letter=>b.includes(letter));
    // first_word.filter(function(letter){
    //     if(b.includes(letter)){

    //     }
    // })
}
console.log(anagramCheck("Army","Mary"));
// console.log(anagramCheck(toUpperCase("Army"),toUpperCase("Mary")));
