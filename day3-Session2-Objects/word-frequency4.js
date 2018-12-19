var players = 'virat virat virat ravi ravi';

function wordfrequency(players){
    player_object = {};
    var players_list = players.split(' ');
    // return players_list;
    count = 0;
    players_list.forEach(function(player) { 
        if(player_object[player]){
            player_object[player]++
        }else{
            player_object[player] = 1;
        }
    });
    return player_object;
}

wordfrequency(players);
console.log(wordfrequency(players));
// {'virat': 4, 'rahul: 3'}
