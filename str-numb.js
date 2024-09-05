let orangePrice = 20;
let applePrice ='20';// right now it's a string not number to convert into number
let totalPrice = orangePrice + applePrice;
let applePriceCon = parseInt('20'); //converted from string to number
let orangePriceConDec = parseFloat('22.50'); //how to convert a  float number
let totalPriceCon = orangePrice + applePriceCon;
let totalPriceConDec = orangePrice + applePriceCon + orangePriceConDec;
console.log(totalPrice);
console.log(totalPriceCon);
console.log(totalPriceConDec);

// some mathmetic error 
let num = 0.1;
let numb= 0.2;
let total= num + numb;
let total2=total.toFixed(2);
console.log(parseFloat(total2))