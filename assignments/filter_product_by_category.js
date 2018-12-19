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

//     1. findByCategory(products, 'Computers');
//     return  [ { id: 1, name: 'Rustic Marble Computer', price: 7997, category: 'Computers', stock: 647, cod_eligible: true }, { id: 2, name: 'Sleek Copper Clock', price: 6177, category: 'Computers', stock: 436, cod_eligible: true } ]

// 2. findByCategory(products, 'Sports'); 
// return []

// function findByCategory(product_array, category) {
//     // var products = {};
//     var array_products = [];
//     product_array.forEach(function (product) {
//         var tempProduct = {};
//         if ((product.category) === category) {
//             console.log('--------------1-----------------')
//             // console.log(category);
//             // return console.log(`${product.id}, ${product.name}, ${product.price}, ${product.category}, ${product.stock}, ${product.cod_eligible}`);
//             // products.push(`${product.id}, ${product.name}, ${product.price}, ${product.category}, ${product.stock}, ${product.cod_eligible}`);
//             tempProduct["id"] = product.id;
//             tempProduct["name"] = product.name;
//             tempProduct["price"] = product.price;
//             tempProduct["category"] = product.category;
//             tempProduct["stock"] = product.stock;
//             tempProduct["cod_eligible"] = product.cod_eligible;
//             array_products.push(tempProduct);
//         }
//     });
//     return array_products;

// }
// console.log(findByCategory(products, 'Computers'));

function findByCategory(products, category) {
    var products = products.filter(product => product.category == category);
    return products;
}
console.log(findByCategory(products, 'ishu'));