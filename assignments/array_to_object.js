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

  function objectifier(array_data){
    obj_data = {};
    array_data.forEach(function(data){
        obj_data[data[0]] = data[1];
    });
    return obj_data;
  }

  console.log(objectifier(data));