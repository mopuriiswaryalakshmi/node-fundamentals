// es5

var amount = 100;
var discount = 10;

function findTotal(amount,discount){
    console.log(amount,discount)
    // discount = (typeof discount == 'undefined') ? 7 :discount;
    // setting default values to paramets
    amount = amount || 0;
    discount = discount || 7;
    console.log(amount,discount);
}

findTotal(amount);           //passing 1 arg
findTotal(amount,discount);  //passing 2 arg
findTotal(undefined,discount);  //passing undefined as param

// es6
function findBill(amount = 0, discount = 0){
    console.log(amount,discount);
}

finalBill();
finalBill(amount);
finalBill(amount,discount);
finalBill(undefined,discount);
