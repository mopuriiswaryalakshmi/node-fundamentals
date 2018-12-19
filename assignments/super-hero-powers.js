var superHeroes = [
    {
      "name": "ishu",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        " Turning tiny",
        " Radiation blast"
      ]
    },
    {
      "name": "ishu",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]

    // function fetchProductsRelatedToCategory(superHeroes_array,superHero_name){
    //     superHero_name.forEach(function(superHero){
    //         if((superHero.name) == superHero_name){
    //             return console.log(`${superHero.powers}`);
    //         }
    //     });
    // }
    // console.log(fetchProductsRelatedToCategory(superHeroes,'Molecule Man'));\

    function fetchProductsRelatedToCategory(superHeroes,superHero_name){
      var superHeroes = superHeroes.find(superHero =>((superHero.name) == superHero_name));
      console.log(superHeroes);
      if(superHeroes){
        // return "Iiiiiiiiiii";
        var p= superHeroes.powers;
        p=p.toString();
        console.log(typeof(p));
        return `${p}`;
      }else{
        return `${superHero_name} is not in the super heroes list`;
      }
  } 
  console.log(fetchProductsRelatedToCategory(superHeroes,'ishu'));