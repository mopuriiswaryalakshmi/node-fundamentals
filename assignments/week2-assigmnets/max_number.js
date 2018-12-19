var max_number = 0;
function findMax(a){
	a.filter(function(num){
		if(num  > max_number){
			max_number = num
		}	
});
	return max_number;
};

console.log(findMax([5,1,4,7,1,2]));