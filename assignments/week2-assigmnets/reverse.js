function reverse(a){
    var output = [];
    var length = a.length;
    while(length >= 0){
        output.push(a[length]);
        length--;
    }
    return output;
}
console.log(reverse([1,2,3,4,5]))