var data = [
  [ 'animals',
    [
      'dogs', ['Corgi', 'Sheltie'],
      'cats', ['Tabby','Black'],
      'pigs', ['Teacup']
    ]
  ],
  [ 'guitars',
    [
      'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
      'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
    ]
  ]
];
// {
//   animals : {
//     dogs : ['Corgi', 'Sheltie'],
//     cats : ['Tabby','Black'],
//     pigs : ['Teacup']
// },
//   guitars : {
//     Fender : ['Telecaster', 'Stratocaster','Jazzmaster'],
//     Gibson : ["Gibson Flying-V", 'Firebird', 'Les Paul']
//   }
// }

function objectifingArray(dataq){
  var object_data = {};
  return dataq;
  dataq.forEach(function(de){
    de.filter()
    // return de;
    // data[]
    // return d;
    // de.forEach(function (d) {
      // console.log(object_data[d[0]] = object_data[d[1]]);
    // object_data[]
    // return d;

  });
  // return object_data;

    
});
}

console.log(objectifingArray(data));