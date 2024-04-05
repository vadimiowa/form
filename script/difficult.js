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
let option = [10, 40, 50, 80, 30];

Array.prototype.always = function(n) {
    return this.map(() => {
        return Math.floor(Math.random() * n);
    })
}

// console.log(option.always(1000));



///////////////////////////////////lesson 3 closure///////////////////////////////////////////
let createCalcFunction = (n) => {
    return () => {
        console.log(1000 * n);
    }
}

let calc = createCalcFunction(50);
// calc();

let createIncrementor = (n) => {
    return (num) => {
        return n + num;
    }
}

let addOne = createIncrementor(1);
let addTen = createIncrementor(10);

// console.log(addOne(10));
// console.log(addOne(41));

// console.log(addTen(10));
// console.log(addTen(41));

let urlGenerator = (domain) => {
    return (url) => {
        return `https://${url}.${domain}`;
    }
}

let comUrl = urlGenerator("com");
let uaUrl = urlGenerator("ua");

// console.log(comUrl("google"));
// console.log(comUrl("netflix"));
// console.log(uaUrl("epicentr"));
// console.log(uaUrl("olx"));


function bind(fn, context) {
    return () => {
        fn.call(context);
    }
}

function logPerson() {
    console.log(`Person: ${this.name} ${this.age} ${this.job}`);
}

let person1 = {
    name: "Vadim",
    age: 22,
    job: "software front-end developer"
}

let person2 = {
    name: "Sasha",
    age: 25,
    job: "software back-end developer"
}

// bind(logPerson, person1)();
// bind(logPerson, person2)();


//////////////////////////////////////lesson 4 async//////////////////////////////////////
// /* Event loop */
// console.log("Start");
// console.log("Start 2");

// let timeOut2sec = () => {
//     console.log("Time out two sec");
// }

// setTimeout(() => {
//     console.log("Start timeout, after 2000 seconds");
// }, 2000);

// setTimeout(timeOut2sec, 2500);

// console.log("End");


//////////////////////////////////////lesson 5 promise////////////////////////////////////
// console.log("Request data...");
// setTimeout(() => {
//     console.log("Preparing data...");

//     const backendData = {
//         server: "aws",
//         port: 2000,
//         status: "working"
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log("Data received", backendData);
//     }, 2000)
// }, 2000)

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Preparing data...")
//         const backendData = {
//             server: "aws",
//             port: 2000,
//             status: "working"
//         }
//         resolve(backendData)
//     }, 2000)
// })

// p1.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 2000)
//     })
// }).then(clientData => {
//     console.log("Data received: ", clientData);
//     return new Promise(resolve => {
//         setTimeout(() => {
//             clientData.fromPromise = true;
//             resolve(clientData);
//         }, 2000)
//     })
// }).then((from) => {
//     console.log("from promise: ", from);
// })
// .catch(er => console.error("Error: ", er))
// .finally(() => console.log("Finally"))

let sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms));
// sleep(2000).then(() => console.log("After two seconds"))
// sleep(3000).then(() => console.log("After three seconds"))

// Promise.all([sleep(2000), sleep(5000)]).then(() => {
//     console.log("All promises")
// })
// Promise.race([sleep(2000), sleep(5000)]).then(() => {
//     console.log("Rece promises")
// })



//////////////////////////////////lesson 6 Object.create [getters, setters]//////////////////////////////////
console.log("await");

let onePromise = new Promise(resolve => {
    setTimeout(() => {
        let get = "We're get this promise...";
        resolve(get);
    }, 2000)
})

onePromise.then((e) => {
    console.log(e);
    return new Promise(resolve => {
        setTimeout(() => {
            let ios = {
                version: 13,
                status: true,
                price: 80000,
                currency: "usd"
            }
            resolve(ios);
        }, 2000)
    })
}).then((e) => {
    console.log(e);
    return new Promise(resolve => {
        setTimeout(() => {
            e.interestPrice = 50000;
            resolve(e);
        }, 1000)
    })
}).then(e => {
    console.log(e);
})


























