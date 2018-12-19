// create a package.json
// install axios

// make an api request to 
//  name - email - address - zipcode - geo lat - geo lan
// 1.ishu - email@gmail.com - kulas DeviceLightEvent(34-343243)(-37.45,81.435)

var axios = require('axios');
var url = `https://jsonplaceholder.typicode.com/users`;
// console.log(axios.get(url));
axios.get(url).then(function(response){ 
    var users = response.data;
    users.forEach(function(user){
        console.log(`${user.username} - ${user.email} - ${user.address.street} - (${user.address.geo.lat} - ${user.address.geo.lat}) - ${user.address.zipcode}`)
    })
});


// https://www.npmjs.com/package/axios
// https://jsonplaceholder.typicode.com/users
https://gender-api.com/
