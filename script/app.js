//console.log("I continue to learn JavaScript and front-end development");

// 1 Operators ////////////////////////////////////////////////////////
let currentYear = 2024;
let birthYear = 2002;
let age = currentYear - birthYear;
// console.log(age);

let a = 10;
let b = 5;

let c = 32;
c = c + a;
//c += a;
//c -= a;
//c *= a;
//c /= a;

//console.log(a + b);// 15
//console.log(a - b);// 5
//console.log(a * b);// 50
//console.log(a / b);// 2
//console.log(++currentYear);
//console.log(--currentYear);
//console.log(c);


// 2 Data types ////////////////////////////////////////////////////////
let isProgrammer = true;
let myName = "Vadim";
let myAge = 21;
let x;
//console.log(typeof isProgrammer);
//console.log(typeof myName);
//console.log(typeof myAge);
//console.log(typeof x);
//console.log(null);


// 3 Operator precedence (Приоритет операторов) ////////////////////////////////////////////////////////
let fullAge = 22;
let myBirthYear = 2002;
let thisCurrentYear = 2024;

let isFullAge = thisCurrentYear - myBirthYear >= fullAge;
//console.log(isFullAge);


// 4 Conditional operators (Условные операторы)////////////////////////////////////////////////////////
let courseStatus = 'ready' // ready, fail, pending

if(courseStatus === "ready") {
    //console.log("This course is ready");
} else if (courseStatus === "pending") {
    //console.log("This course isn't ready");
} else {
    //console.log(null);
}

let isReady = true;
/* if(isReady) {
    console.log("We'are continue this course");
} else {
    console.log("We'are show false");
} */

// Тернарное выражение
//isReady ? console.log("We'are continue this course") : console.log("We'are show false");

let numOne = 50; // number
let numTwo = "50"; // string
//console.log(numOne === numTwo);


// 5 boolean logics ////////////////////////////////////////////////////////
//let booleanLog = true && true;
let booleanLog = false || false;
//console.log(booleanLog);


// 6 function ////////////////////////////////////////////////////////
function yourYear(year) {
    return 2024 - year;
}
//console.log(yourYear(2002));

function logInfoAbout(name, year) {
    let age = yourYear(year);

    if(age > 0) {
        console.log("My name is " + name + " " + "my current year " + age);
    } else {
        console.log("It'll happen sooner or later");
    }
}

//logInfoAbout("Vadim", 2002);

// 7 Array ////////////////////////////////////////////////////////
let aboutArray = ["bmw", "audi", "nissan", "porshe"];
//console.log(aboutArray);


// 7 cycle for() ////////////////////////////////////////////////////////
for(let i = 0; i < aboutArray.length; i++) {
    //let cars = aboutArray[i];
    //console.log(cars);
}

// name this cycle: "for of"
/* for(let car of aboutArray) {
    console.log(car);
} */


// 8 objects ////////////////////////////////////////////////////////
let person = {
    firstName: "Vadim",
    lastName: "Sytnyk",
    year: 2002,
    lenguages: ["English", "Russion", "Ukraine"],
    hasWife: false,
    greet: function() {
        console.log("We'are learn a data type object");
    }
}

/* console.log(person.lenguages);
console.log(person.hasWife);
let key = "year";
person.hasWife = true;
console.log(person[key]);
person.greet();
console.log(person);
let wife = "hasWife";
console.log(person[wife]);
person.isProgrammer = true; */























