var players = ['virat', 'rahul', 'sachin'];

function delateAt(players,index)
{
	players.splice(index,1);
	return players;
}

console.log(delaeteAt(players,1));