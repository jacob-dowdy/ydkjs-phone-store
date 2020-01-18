const TAX_RATE = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;
var purchaseAmount = 0;

// calculate tax on existing amount
function calculateTax(amt) {
    amt = amt + (amt * TAX_RATE);
    return amt;
}

// format amount and fix to 2 decimal places.
function formatAmount(amt) {
    amt = "$" + purchaseAmount.toFixed(2);
    return amt;
}

var buyPhone = prompt("Do you want to buy a phone?");

if (buyPhone.toLowerCase() === "yes") {
    var bankBalance = prompt("Great! How much money do you have?");
    var numPhone = 0;
    // conditional to see if user can afford another phone
    while(bankBalance > purchaseAmount + phonePrice){
        numPhone++;
        purchaseAmount += calculateTax(phonePrice + accessoryPrice);
        console.log(purchaseAmount);
        alert('You bought another phone and accessory! You now have ' + numPhone + ' phone.');
    }
    alert('You spent ' + formatAmount(purchaseAmount) + ' and got ' + numPhone + '(s).');
    
} else {
    alert("Ok. Have a nice no-phone day, Mr. Cheapskate.");
}
