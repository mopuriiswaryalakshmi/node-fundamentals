function lastIndexOf(a,b){
	return a.filter(function(num){
        if(num == b){
            return b;
        }
    });
};
console.log(lastIndexOf([1,2,3,4],2));