var products = [
    {
        "id": 1,
        "name": "Rustic Marble Computer",
        "price": 7997.0,
        "category": "Computers",
        "stock": 647,
        "cod_eligible": true
    },
    {
        "id": 2,
        "name": "Sleek Copper Clock",
        "price": 6177.0,
        "category": "Computers",
        "stock": 436,
        "cod_eligible": true
    },
    {
        "id": 3,
        "name": "Ergonomic Concrete Pants",
        "price": 1732.0,
        "category": "Baby",
        "stock": 68,
        "cod_eligible": true
    },
    {
        "id": 4,
        "name": "Gorgeous Linen Table",
        "price": 4667.0,
        "category": "Tools",
        "stock": 123,
        "cod_eligible": true
    },
    {
        "id": 5,
        "name": "Heavy Duty Silk Knife",
        "price": 3348.0,
        "category": "Grocery",
        "stock": 37,
        "cod_eligible": true
    },
    {
        "id": 6,
        "name": "Incredible Plastic Hat",
        "price": 4277.0,
        "category": "Electronics",
        "stock": 517,
        "cod_eligible": true
    },
    {
        "id": 7,
        "name": "Ergonomic Plastic Coat",
        "price": 8983.0,
        "category": "Baby",
        "stock": 420,
        "cod_eligible": true
    },
    {
        "id": 8,
        "name": "Enormous Rubber Table",
        "price": 6342.0,
        "category": "Music",
        "stock": 583,
        "cod_eligible": true
    },
    {
        "id": 9,
        "name": "Heavy Duty Marble Table",
        "price": 9158.0,
        "category": "Kids",
        "stock": 447,
        "cod_eligible": true
    },
    {
        "id": 10,
        "name": "Intelligent Silk Bench",
        "price": 8902.0,
        "category": "Garden",
        "stock": 72,
        "cod_eligible": true
    }];

//     1. findProduct(products, 9); 
// returns { "id": 9, "name": "Heavy Duty Marble Table", "price": 9158.0, "category": "Kids", "stock": 447, "cod_eligible": true }

// 2. findProduct(products, 100);
//  returns 'No product found with id = 100' 

    // function fetchProductsRelatedToCategory(product_array,id){
    //     var products = {};
    //     var flag = 0;
    //     // return product_array[0];
    //     // product_array.forEach(function(product1){
    //         product_array.forEach(function(product){
    //         // return console.log(product.category);
    //         if((product.id) == id){
    //             // return console.log(`${product.id}, ${product.name}, ${product.price}, ${product.category}, ${product.stock}, ${product.cod_eligible}`);
    //             products["id"] = product.id;
    //             products["name"] = product.name;
    //             products["price"] = product.price;
    //             products["category"] = product.category;
    //             products["stock"] = product.stock;
    //             products["cod_eligible"] = product.cod_eligible;
    //         flag=1;
    //         return console.log(products);
    //         }
    //     });
    //     // else{
    //         // console.log(flag==0);
    //     if(flag==0){
    //         return console.log(`No product found with id = ${id}`);
    //     }
    // }
    // console.log(fetchProductsRelatedToCategory(products,'9'));


    function fetchProductsRelatedToCategory(product_array,id){
        var product = product_array.find(product => product.id === id);  //no value -> so undefined
        if(product){
            return product;
        }else{
            return `No product found with id = ${id}`;
        }
    }
    console.log(fetchProductsRelatedToCategory(products,'0'));