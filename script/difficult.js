////////////////////// DIFFICULT JavaScript course ///////////////////////
////////////////////// lesson 1 prototype //////////////////////
let worker = {
    name: "Vadim",
    age: 22,
    greet() {
        console.log("Greet!");
    }
}

// let worker = new Object({
//     name: "Vadim",
//     age: 22,
//     greet() {
//         console.log("Greet!");
//     }
// });

// worker.name = undefined;
// worker.age = undefined;

Object.prototype.sayHello = () => {
    console.log("Hello my profession");
}

// worker.sayHello();

let lena = Object.create(worker);
lena.name = "Elena";

let str = new String("I'm string");

// destructuration
let {name: yName = "My name is Vadim", age: yAge = [22, 22]} = worker;
// console.log(yName, yAge);



////////////////////// lesson 2 context "this", call, bind, apply //////////////////////
// let hello = () => {
//     console.log("Hello", this);
// }

function hello () {
    console.log("Hello", this);
}

let man = {
    name: "Vadim",
    age: 22,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

let lenam = {
    name: "Elena",
    age: 22
}


// option 1 let fnLenaInfoLog = man.logInfo.bind(lenam, "Front-end", "+38(063)-708-26-82");
// fnLenaInfoLog();

// option 2 man.logInfo.call(lenam, "Front-end", "+38(063)-708-26-82");
// man.logInfo.apply(lena, ["Front-end", "+38(063)-708-26-82"]);


let forArray = [1, 2, 3, 4, 5];
let forThisArray = [1, 2, 3, 4, 5];

// let multBy = (arr, n) => {
//     return arr.map((i) => {
//         return i * n;
//     })
// }
// console.log(multBy(forArray, 2));

Array.prototype.multBy = function(n) {
    return this.map((i) => {
        return i * n;
    })
}

// console.log(forArray.multBy(20));
// console.log(forThisArray.multBy(10));
///////////////////////////////////////////////////////////////////////////////////////////////////////
let some = [700, 400, 500, 800];

let mathSome = (arr, y) => {
    return arr.map((i) => {
        return i * y;
    })
}

Array.prototype.give = function(n) {
    return this.map((i) => {
        return i * n;
    })
}

console.log(some.give(5));















