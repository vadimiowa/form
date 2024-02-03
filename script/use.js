// I continue to learn JavaScript more detail
// DETAIL JavaScript

//////////////////////////////////////////////  NUMBER  //////////////////////////////////////////////
/* let num = 50; // integer
let float = 50.75; // float
let pow = 10e3; // pow
console.log("MAX_SAFE_INTEGER: ", Number.MAX_SAFE_INTEGER);
console.log("Math pow 53: ", Math.pow(2, 53) - 1);
console.log("MIN_SAFE_INTEGER: ", Number.MIN_SAFE_INTEGER);
console.log("MAX_VALUE: ", Number.MAX_VALUE);
console.log("MIN_VALUE: ", Number.MIN_VALUE);
console.log("POSITIVE_INFINITY: ", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);
console.log("2 / 0: ", 2 / 0);
console.log("NuN: ", Number.NaN); // translate: Not a number
console.log(typeof NaN);
console.log(2 / undefined);
let twoUn = 2 / undefined;
console.log(Number.isNaN(twoUn));
console.log(Number.isNaN(42));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(55));


let stringInt = "40";
let stringFloat = "40.42";
console.log(Number.parseInt(stringInt) + 2);
console.log(parseInt(stringInt) + 4);
console.log(+stringInt + 4);

console.log(parseFloat(stringFloat) + 2); */

/* console.log(0.4 + 0.2); // 0.6
console.log(+(0.4 + 0.2).toFixed(1));
console.log(parseFloat((0.4 + 0.2).toFixed(1))); */



//////////////////////////////////////////////  BIGINT //////////////////////////////////////////////
/* console.log(90071992547409919999999999n - 9007199254740991999999999n);
console.log(-9007199254740991999999999n);
console.log(9007199254740991999999999.5555n); // error */

//console.log(10n - 4); // error
/* console.log(parseInt(10n) - 4); // correct
console.log(10n - BigInt(4));
console.log(5n / 2n); */



//////////////////////////////////////////////  MATH  //////////////////////////////////////////////
/* console.log(Math.E);
console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.pow(5, 3));
console.log(Math.abs(-42));
console.log(Math.max(30, 700, 550, 900, 300, 400, 600));
console.log(Math.min(30, 700, 550, 900, 300, 400, 600));

console.log(Math.floor(5.9));
console.log(Math.ceil(5.9));

console.log(Math.round(8.9));
console.log(Math.trunc(8.9));

console.log(Math.random()); */

// Example
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//let showRandom = getRandom(10, 95);
//console.log(showRandom);



//////////////////////////////////////////////  STRING  //////////////////////////////////////////////
























