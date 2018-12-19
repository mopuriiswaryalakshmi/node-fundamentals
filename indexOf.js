var cities=["ishu","abc","xyz"];

function deletMany(cities,names){
	debugger;
	names.forEach(function(cityName){
		var index = cities.indexOf(cityName);
		debugger;
		if(index >= 0){
			cities.splice(index,1);
		}
	});
	return cities;
}

console.log(deletMany(cities,["abc","xyz"]));

//debugger 
//1. node inspect indexOf.js,
//2.next,next  it will stop in debugger,
//3.repl
//iffe ==> immmediatly invoked function expession

var cities=['banglore','mysore','ishu','abc'];
function deleteCities(cities,cityName){
	var index=cities,indexOf(cityName);
	if(index>=0){
	cities.splice(index,1)
	}

	return cities
}
console.log(deleteCities(cities,'abc'));