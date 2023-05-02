let a = 3;
let b = 2;
let c = 5;
let adi;
let sub;
let mult;
let div;
let mod;

adi = (a + b);
sub = (a - b);
mult = (a * b);
div = (a / b); 
mod = (a % b);

console.log(adi, sub, mult, div, mod);

if (a > b && a > c){
    console.log("O maior número é: " + a);
} else if (b > a && b > c){
    console.log("O maior número é: " + b);
} else {
    console.log("O maior número é: " + c);
}

if (a > 0) {
    console.log("Positivo");
} else if (a < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}