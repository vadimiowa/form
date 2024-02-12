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
// let showRandom = getRandom(10, 95);
// console.log(showRandom);

// let taskMath = setInterval(numberMath, 1000);


//////////////////////////////////////////////  STRING  //////////////////////////////////////////////
let ourName = "Vadim";
let ourAge = 22;

/* function thisYear() {
    return ourAge;
} */

// let output = "Меня зовут " + ourName + " и мой возраст " + ourAge;
// let output = `Hello my name is ${ourName} and my current year ${ourAge < 20 ? "age age" : "22"}`;
// let output = `
// <div>This is output</div>
// <p> this is p </p>
// `

// let aboutTheWord = "programming";
// console.log(aboutTheWord.length);
// console.log(aboutTheWord.toUpperCase());
// console.log(aboutTheWord.toLowerCase());
// console.log(aboutTheWord.charAt(10));
// console.log(aboutTheWord.indexOf("ramm"));
// console.log(aboutTheWord.startsWith("pro"));
// console.log(aboutTheWord.endsWith("ing"));
// console.log(aboutTheWord.repeat(3));

// let pass = `      password      `;
// console.log(pass.trim());
// console.log(pass.trimLeft());
// console.log(pass.trimRight());

//  New syntax
// function logPurson(s, name, age) {
//     if(age < 0) {
//         age = "It's folse";
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`;
// }

// let oneName = "Vadim,"
// let oneAge = 22;
// let oneName2 = "Maksim,"
// let oneAge2 = -20;

// let output = logPurson`Name: ${oneName} Age: ${oneAge} !`;
// let output2 = logPurson`Name: ${oneName2} Age: ${oneAge2} !`;
// console.log(output);
// console.log(output2);

function toMathArr(arr) {
    let ux = 0;
    for(let i = 0; i < arr.length; i++) {
        ux += arr[i];
    }

    return ux;
}

function aboutMeHere(a, name, age, here, array) {
    let toThisArr = toMathArr(array);
    let showRandom = getRandom(10, 95);

    if(age > 0) {
        // console.log("How much will you pay for your apartment ?");
        age = 22 + " good";
    } else {
        // console.log("I chenged my decision yesterday !!!");
        age = false;
    }

    return `${a[0]}${name}${a[1]}${age}${a[2]}${here} ${toThisArr}` + " " + showRandom;
}

let toName = "Vadim";
let toAge = 22;
let whoImHere = "front-end developer";

let forMe = aboutMeHere`My name is ${toName} my current year ${toAge} and i'm here ${whoImHere} ${[200, 200, 789, 811, 1000]}`;
// console.log(forMe);


//////////////////////////////////////////////  FUNCTION  //////////////////////////////////////////////
// Function number 1: "function declaration";
// function greet(name) {
//     console.log("This name", name);
// }

// greet("Vadim");

// Function number 2: "function expression"
// let greet2 = function greetTwo(name) {
//     console.log("Two name", name);
// }

// greet2("Vadim");
// console.log(typeof greet);
// console.dir(greet);


// Anonymous functions (анонимные функции);
// let counter = 0;
// let interval = setInterval(function() {
//     if(counter == 5) {
//         clearInterval(interval);
//     } else {
//         console.log(++counter);
//     }
// }, 1000);


// Arrow => (стрелочные функции);
function greet(name) {
    console.log("This name", name);
}

let arrow = (name) => {
    console.log("About my name", name);
}
// let arrow2 = name => console.log("What about name", name);

// arrow("Vadim");
// arrow2("Vadim");


let poww = num => {
    return num ** 2;
}
// console.log(poww(5));


let pow = num => num * 2;
// console.log(pow(5));


// Default
let sum = (a = 40, b = a * 2) => a + b;
// console.log(sum());


function sumAll(...all) {
    let result = 0;
    for(num of all) {
        result += num;
    }
    return result;
}

let res = (sumAll(1, 2, 3, 4, 5, 6));
// console.log(res);



// Замыкание
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName);
    }
}

// let logWithLastName = createMember("Vadim");
// console.log(logWithLastName(" Sytnyk"));



//////////////////////////////////////////////  ARRAY  //////////////////////////////////////////////













