var axios = require('axios');

// HTTP METHODS - GET, POST, PUT, DELETE

var name = 'ishu';
var key = 'pRPLCejozFwCHFbVCR';
var url = `https://gender-api.com/get?name=${name}&key=${key}`;
axios.get(url).then(function(response){
    console.log(`the gender of ${response.data.name} is ${response.data.gender}`);
}).catch(function(err){
    console.log(err.code);
});

// npm init  -----> create pacakage.json
//  npm install -->create package-lock.json  ----> command to install package-lock.json
//  npm install -- save axios   -------> command to install axios  -->
// backtic ---> eleminates hole concatination


// json placeholder