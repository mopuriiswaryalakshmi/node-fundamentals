var players = ['virat', 'rahul', 'sachin'];

function insertAt(players,index,else)
{
	players.splice(index,0,ele);
	return players;
}

console.log(delaeteAt(players,1));

//splice if we know index

// var cities=['banglore','mysore','ishu','abc'];
// function deleteCities(cities,cityName){
// 	var index=cities,indexOf(cityName);
// 	if(index>=0){
// 	cities.splice(index,1)
// 	}

// 	return cities
// }
// console.log(deleteCities(cities,'abc'));

