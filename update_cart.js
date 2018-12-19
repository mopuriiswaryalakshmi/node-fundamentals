var cartLineItems= [
    {
        id: 1,
        name: 'ishu',
        quantity: 3
    },
    {
        id: 2,
        name: 'duster',
        quantity: 4
    }
]

// function updateCart(cartLineItems, id,prop,quantity){
//     return cartLineItems;
// }
// console.log(updateCart(cartLineItems, id,'quantity',3));
// updateCart(cartLineItems, 2,'quantity',3);

function updateCart(cartLineItems, id,prop,quantity){
    var item = cartLineItems.find(function(inCart){
       return inCart.id ==  id;
    });

    if(item){
        item[prop] = quantity;
    }

    return cartLineItems;
}
console.log(updateCart(cartLineItems, 2,'quantity',10));

//name={firstname: 10,lastname: 20};
//name.firstname
//prop = firstname;
//name[firstname];
