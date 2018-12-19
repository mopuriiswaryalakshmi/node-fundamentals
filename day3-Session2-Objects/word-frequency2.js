var players = 'virat virat virat ravi ravi ishu arjun';

function wordfrequency(players){
    player_object = {};
    var players_list = players.split(' ');
    // return players_list;
    players_list.forEach(function(player) { 
       var player_index = players.indexOf(player);    
        player_object[player]=player_index;
    });
    return player_object;
}

wordfrequency(players);
console.log(wordfrequency(players));
// {'virat': 4, 'rahul: 3'}
