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
let mathArr = arr => {
    let s = 0;
    for(let i of arr) {
        s += i;
    }
    return s;
}

let keyRandom = ran => Math.floor(Math.random() * ran);

let keysAbout = (arr, tname, age, prof, arrMath, ran) => {
    age > 0 ? age = 22 + " true" : age = false;
    let getMathFun = mathArr(arrMath);
    let keyRan = ran.map(() => keyRandom(200000));
    return `${arr[0]}${tname}${arr[1]}${age}${arr[2]}${prof} ${getMathFun} ${keyRan}`;
}

let keyName = "Vadim";
let keyAge = 22;
let keyProfession = "a software developer";

let showKeys = keysAbout`My name is ${keyName} my current age ${keyAge} i'm ${keyProfession} ${[200, 400, 800, 600]} ${[1]}`;
// console.log(showKeys);
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
let cars = ["mazda", "ford", "bmw", "mersedes"];
let fib = [1, 1, 2, 3, 5, 8, 13];
let people = [
    {name: "Vadim", budget: 4200},
    {name: "Sasha", budget: 3500},
    {name: "Max", budget: 1700}
]

// Function
function addItemToEnd(){};

// Method
// cars.push("honda");
// cars.unshift("henday");

// let firstItem = cars.shift();
// let lastCar = cars.pop();

// console.log(firstItem);
// console.log(lastCar);
// console.log(cars);


// console.log(cars.reverse());
// console.log(cars);


// task 1
// let text = "Hello, i continue to learn javaSctipt";
// let reverseText = text.split("").reverse().join("");
// console.log(reverseText);

// task 2
// let index = cars.indexOf("bmw");
// cars[index] = "porsche";
// console.log(cars);

// let findPerson;
// for(let person of people) {
//     if(person.budget === 4200) {
//         findPerson = person;
//     }
// }
// console.log(findPerson);

// let index = people.findIndex(function(person) {
//     return person.budget === 3500;
// });
// let man = people.find(function(person) {
//     return person.budget === 3500;
// });

let aboutPerson = people.find(person => person.budget === 1700);
let aboutMe = people.find(person => person.budget === 4200);

// console.log(people[index]);
// console.log(man);
// console.log(aboutMe);

// console.log(cars.includes("mazda"));

// let upperCaseCars = cars.map(car => {
//     return car.toUpperCase();
// })


// task 3
// let pow2 = num => num ** 2;
// let sqrt = num => Math.sqrt(num);

// let pow2fib = fib.map(pow2);
// const filterNumbers = pow2fib.filter(num => num > 20);

// console.log(upperCaseCars);
// console.log(cars);
// console.log(pow2fib);
// console.log(filterNumbers);


// task 4
// let people = [
//     {name: "Vadim", budget: 4200},
//     {name: "Sasha", budget: 3500},
//     {name: "Max", budget: 1700}
// ]

let allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => {
        acc += person.budget;
    return acc;
}, 0);

// console.log(allBudget);

let numbers = [1, 2, 3];
let randomSsh = ran => Math.floor(Math.random() * ran);
let numbersRandom = numbers.map(() => randomSsh(100));
// console.log(numbersRandom);

//////////////////////////////////////////////  OBJECTS {}  //////////////////////////////////////////////
let mySelf = {
    name: "Vadim",
    age: 22,
    isProgrammer: true,
    languages: ["ua", "en", "ru"],
    // "complex key": "complex Value",
    // ["Key_" + (1 + 3)]: "Computed Key",
    greet() {
        console.log("Greet from person");
    },
    info() {
        console.log("this: ", this);
        console.info("Information about name is: ", this.name);
    }
}

// console.log(mySelf.name);
// let ageKey = "age";
// console.log(mySelf[ageKey]);
// console.log(mySelf["complex key"]);
// console.log(mySelf.Key_4);
// mySelf.greet();
// console.log(mySelf);


// mySelf.languages.push("English");
// mySelf["Key_4"] = undefined;
// delete mySelf["Key_4"];


// destructuring
// let name1 = mySelf.name;
// let age1 = mySelf.age;
// let languages1 = mySelf.languages;

// NEW destructuring
// let {name: ourNa, age: personAge = 22, languages} = mySelf;
// console.log(ourNa, personAge, languages);

// console.log(mySelf);
// for(let key in mySelf) {
//     if(mySelf.hasOwnProperty(key)) {
//         console.log("Key: ", key);
//         console.log("Value: ", mySelf[key]);
//     }
// }

// Object.keys(mySelf).forEach((key) => {
//     console.log("Key: ", key);
//     console.log("Value: ", mySelf[key]);
// });


// Context
// mySelf.info();

let logger = {
    keys() {
        console.log("Object Keys: ", Object.keys(this));
    },

    keyAndValues() {
        // Object.keys(this).forEach((key) => {
        //     console.log(`"${key}": ${this[key]}`);
        // })

        // let self = this;
        Object.keys(this).forEach(function(key) {
            console.log(`"${key}": ${this[key]}`);
        }.bind(this));
    },

    withParams(top = false, between = false, botton = false) {
        if(top) {
            console.log("------ Start ------");
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`);
            if(between && index !== array.length - 1) {
                console.log("------------");
            }
        })

        if(botton) {
            console.log("------ End ------");
        }
    }
}

// let bound = logger.keys.bind(mySelf);
// bound();
// logger.keys.call(mySelf);
// logger.keyAndValues.call(mySelf);

// logger.withParams.call(mySelf, true, true, true);
// logger.withParams.apply(mySelf, [true, true, true]);

let aPerson = {
    name: "Vadim",
    age: 22,
    isProgrammer: true,
    languages: ["Ukrain", "English", "Rassion"],
    "complex key": "complex value",
    ["Key_" + (1 + 3)]: "Computed key",
    amazing() {
        console.log("It looking amazing")
    },

    info() {
        console.log("Infoemation about this method", this.name);
    }
}


let loggers = {
    keys() {
        console.log("Object keys: ", Object.keys(this));
    },

    AndValue() {
        Object.keys(this).forEach((key) => {
            console.log(`${key}: ${this[key]}`);
        })
    },

    correct(top = false, between = false, button = false) {
        if(top) {
            console.log("-------------Start-----------");
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key}: ${this[key]}`);
            if(between && index != array.length -1) {
                console.log("----------------------------");
            }
        })

        if(button) {
            console.log("-------------Finish------------");
        }
    }
}

// loggers.correct.call(aPerson, true, true, true);
// let bound = loggers.keys.bind(aPerson);
// bound();

//////////////////////////////////////////////////////////////////////////////
let car = {
    brand: "BMW",
    price: 25000,
    model: "5-series",
    thisIsMycar: true,
    aCar() {
        console.log("Information about this car")
    }
}

let bindCar = {
    thisCar(top = false, between = false, bottom = false) {
        if(top) {
            console.log("------------START-----------");
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key}: ${this[key]}`);
            if(between && index != array.length -1) {
                console.log("-----------------------");
            }
        })
        if(bottom) {
            console.log("--------------END--------------");
        }
    }
}

// bindCar.thisCar.call(car, true, true, true);


//////////////////////////////////////////////  ACYNCHRONY  //////////////////////////////////////////////
// Event Loop
// let timeout = setTimeout(() => {
//     console.log("After imeout");
// }, 1000);

// clearTimeout(timeout);

// let interval = setInterval(() => {
//     console.log("After imeout");
// }, 1000);

// clearInterval(timeout);

// let delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait);
// }

// delay(() => {
//     console.log("After two seconds");
// }, 1000);

let delay = (wait = 1000) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            // reject("Try again");
        }, wait)
    })
    return promise;
}

// delay(2500)
// .then(() => {
//     console.log("After two seconds");
// })
// .catch(err => console.error("Error: ", err))
// .finally(() => console.log("finally"))


let getData = () => new Promise(resolve => resolve([
1, 1, 2, 3, 5, 8, 13
]))

// getData().then(data => console.log(data));

async function asyncExample() {
    try {
        await delay(3000)
        let data = await getData()
        console.log("Data: ", data);
    } catch(e) {
        console.log(e);
    } finally {
        console.log("Finally");
    }
}

// asyncExample();
/////////////////////////////////////////////////////////////////////////////
// let timeOut = setTimeout(() => {
//     console.log("Right here you can see everything popular drings in this place");
// }, 2000);

// clearTimeout(timeOut);

// let interval = setInterval(() => {
//     console.log("We often talked on the phone yesterday");
// }, 1500);

// clearInterval(interval);

// let twoDelay = (callback, wait = 1000) => {
//     setTimeout(callback, wait);
// }

// twoDelay(() => {
//     console.log("How much money do you want to earn here ?")
// }, 2000);

let proDelay = (wait = 1000) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            // reject("This is interesting error!!!");
        }, wait)
    })
    return promise;
}

// proDelay(1000)
// .then(() => {
//     console.log("After two seconds");
// })
// .catch(err => console.error("Error: ",err))
// .finally(() => console.log("Finally"))


let getDataSave = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

// getDataSave().then(data => console.log(data));

let asyncExampleTwo = async () => {
    try {
        await proDelay(1000)
        let data = await getDataSave()
        console.log(data);
    } catch(e) {
        console.log(e);
    } finally {
        console.log("Finally");
    }
}

// asyncExampleTwo();
let multiplePromis = (wait = 2000) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            // reject("This is function")
        }, wait)
    })
    return promise;
}

let multipleArray = () => new Promise(resolve => resolve([
    490, 590, 690, 790, 890, 990, 1000
]))

let multipleAsync = async () => {
    try {
        await multiplePromis();
        let arr = await multipleArray();
        console.log(arr);
    } catch(e) {
        console.log("Error: ", e);
    } finally {
        console.log("We'are get finally");
    }
}

// multipleAsync();

//////////////////////////////////////////////  DOM ELEMENTS  ///////////////////////////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
let headingOne = document.querySelector(".title__top");
let headingTwo = document.querySelector(".title__between")
let headingThree = document.querySelectorAll(".title__between");
let headingThreeNext = headingThree[1];
let title = document.querySelector(".form__title");
let signIn = document.querySelector(".email__title");

let tiTop = document.querySelector(".title__to");
let tiBet = document.querySelector(".title__bet");
let tiBut = document.querySelector(".title__button");
// let headingOne = document.getElementById("hello");
// let headingTwo = document.getElementsByTagName("h2")[0];
// let headingTwo = document.getElementsByClassName("title__between");
// let headingTwo = document.querySelector(".title__between").nextElementSibling;
// let headingTwo = document.querySelector(".title__between");
// let headingThree = headingTwo.nextElementSibling;
// let h2List = document.querySelectorAll(".title__between");
// let headingThree = h2List[1];
// let headingThree = h2List[h2List.length -1];
// console.log(headingThree);

let anotherHeadingOne = (node, color = "lightblue") => {
    node.style.color = color;
    node.style.backgroundColor = "#476a6b";
    node.style.borderRadius = "6px";
    node.style.transition = "0.5s";
    node.style.width = "100%";
}

let anotherHeadingTwo = (node, color = "lightskyblue") => {
    node.style.color = color;
    node.style.transition = "0.5s";
}

setTimeout(() => {
    anotherHeadingOne(headingOne, "#85d7ff");
}, 1200)

let link = headingTwo.querySelector("a");
link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Click on link: ", event.target.getAttribute("href"));
    let url = event.target.getAttribute("href");

    window.location = url;
})

setTimeout(() => {
    anotherHeadingTwo(link, "lightskyblue");
}, 1200)

setTimeout(() => {
    anotherHeadingOne(headingThreeNext, "lightblue");
}, 1200)

headingThreeNext.onclick = () => {
    if(headingThreeNext.style.color === "lightblue") {
        headingThreeNext.style.color = "#ccc";
        headingThreeNext.style.backgroundColor = "black";
    } else {
        headingThreeNext.style.color = "lightblue"
        headingThreeNext.style.backgroundColor = "#476a6b";
    }
}

headingTwo.addEventListener("click", () => {
    if(headingTwo.style.color === "lightskyblue") {
        headingTwo.style.color = "#ccc";
    } else {
        headingTwo.style.color = "lightskyblue";
    }
})

/////////////animationTitle///////////////
let addSpeed = (node) => {
    node.classList.add("active");
}

let addSpeedBack = (node) => {
    node.classList.add("back")
    ? node.classList.contains("back") : node.classList.remove("active");
}

let animationTime = (top = 1000, bet = 200, but = 1500, back = 2500) => {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(addSpeed(tiTop));
        }, top)
        setTimeout(() => {
            resolve(addSpeed(tiBet));
        }, bet)
        setTimeout(() => {
            resolve(addSpeed(tiBut));
        }, but)
        setTimeout(() => {
            resolve(addSpeedBack(tiBut));
        }, back)
    })
    return promise;
}

let awaitAnimation = async () => {
    try {
        await animationTime();
    } catch(e){
        console.log(e);
    }
}

awaitAnimation();

/////////////////////////////////////finished easy JavaScript////////////////////////////////////////////
let theme = document.querySelector(".theme");
let themeClick = document.querySelector(".theme__click");
let themeLight = document.querySelector(".theme__light");
let themeDark = document.querySelector(".theme__dark");

let body = document.querySelector("body");
let titleTop = document.querySelector(".form__title");
let email = document.querySelector(".email__data");
let emailTwo = document.querySelector(".email__data--pass");
let forget = document.querySelector(".forgot");
let remember = document.querySelector(".remember__text");
let emailTitle = document.querySelector(".email__title");


let otherStyles = (node) => {
    node.classList.add("active");
}

let waitClickTheme = (node) => {
    node.classList.toggle("active");
}

let waitBack = (node) => {
    node.classList.remove("active");
}

themeClick.addEventListener("click", () => {
    waitClickTheme(theme);
    waitClickTheme(themeClick);
});

themeLight.addEventListener("click", () => {
    waitBack(themeClick);
    waitBack(theme);
    otherStyles(body);
    otherStyles(titleTop);
    otherStyles(email);
    otherStyles(emailTwo);
    otherStyles(forget);
    otherStyles(remember);
    otherStyles(emailTitle);
});

themeDark.addEventListener("click", () => {
    waitBack(themeClick);
    waitBack(theme);
    waitBack(body);
    waitBack(titleTop);
    waitBack(email);
    waitBack(emailTwo);
    waitBack(forget);
    waitBack(remember);
    waitBack(emailTitle);
});


















