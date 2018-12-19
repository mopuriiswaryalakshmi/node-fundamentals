var players = 'virat virat virat ravi ravi ishu arjun';

function wordfrequency(players){
    player_object = {};
    var players_listArray = players.split(" ");
    // var players_name = players_listArray.unique();
		var  uniq_players_listArray= Array.from(new Set(players_listArray));
    uniq_players_listArray.forEach(function(player){
    	player_object[player] = uniq_players_listArray.filter(function(num){
    		var player_count = (num == player);
    		return player_count.count
    	}.bind(this));
    });
    return player_object;
}

console.log(wordfrequency(players));
// {'virat': 4, 'rahul: 3'}
