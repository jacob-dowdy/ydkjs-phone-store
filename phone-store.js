const TAX_RATE = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;
const spendingThreshold = 400.00;
var purchaseAmount = 0;

function calculateTax(amt) {
    amt = amt + (amt * TAX_RATE);
    return amt;
}

function formatAmount(amt) {
    amt = "$" + purchaseAmount.toFixed(2);
    return amt;
}

var buyPhone = prompt("Do you want to buy a phone?");

if (buyPhone.toLowerCase() === "yes") {
    var bankBalance = prompt("Great! How much money do you have?");
    var numPhone = 0;
    while(bankBalance > purchaseAmount + phonePrice){
        numPhone++;
        purchaseAmount += calculateTax(phonePrice + accessoryPrice);
        console.log(purchaseAmount);
        alert('You bought another phone and accessory! You now have ' + numPhone + ' phone.');
    }
    alert('You spent ' + formatAmount(purchaseAmount) + ' and got ' + numPhone + '.');
    
} else {
    alert("Ok. Have a nice no-phone day, Mr. Cheapskate.");
}
