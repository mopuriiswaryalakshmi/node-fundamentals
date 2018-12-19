var axios = require('axios');



var links = [{website: 'facebook', link: 'http://www.facebook.com'},{ website: 'github', link: 'http://www.github.com'}];
var countHandle = document.getElementById('count');
var listHandle = document.getElementById('list');
links.forEach(function(data){
    // console.log(data['link']);
var li = document.createElement('li');
var a = document.createElement('a');
    var websiteName = document.createTextNode(data['website']);
    var href = document.createAttribute('href');
    href.value = data['link'];

    a.setAttributeNode(href);           
    a.appendChild(websiteName);
    li.appendChild(a);

    listHandle.appendChild(li);

});

// var a = document.createElement('a');
//     var websiteName = document.createTextNode(data['website']);
//     var href = document.createAttribute('href');
//     // href.value = data['link'];
//     a.setAttribute('href',link.data['link']);
//     a.setAttribute('target','_blank');

             
//     a.appendChild(websiteName);
//     li.appendChild(a);

//     listHandle.appendChild(li);

// });

var url = 'http://dct-api-data.herokuapp.com/tickets?api_key=fe694992d9810eb2';
axios.post(url,).then(function(response){
console.log(response.data);
}).catch(function(err){

});

