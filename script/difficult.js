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

// console.log("await");

// let onePromise = new Promise(resolve => {
//     setTimeout(() => {
//         let get = "We're get this promise...";
//         resolve(get);
//     }, 2000)
// })

// onePromise.then((e) => {
//     console.log(e);
//     return new Promise(resolve => {
//         setTimeout(() => {
//             let ios = {
//                 version: 13,
//                 status: true,
//                 price: 80000,
//                 currency: "usd"
//             }
//             resolve(ios);
//         }, 2000)
//     })
// }).then((e) => {
//     console.log(e);
//     return new Promise(resolve => {
//         setTimeout(() => {
//             e.interestPrice = 50000;
//             resolve(e);
//         }, 1000)
//     })
// }).then(e => {
//     console.log(e);
// })

//////////////////////////////////lesson 6 Object.create [getters, setters]//////////////////////////////////
let about = Object.create({calculataAge() {console.log("Age: ", new Date().getFullYear() - this.birthYear)}},
{
    name: {
        value: "Vadim",
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 2002,
        enumerable: true, // for cicle
        writable: false, // for other value
        configurable: false // for delete
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = "red"
            console.log("Set age", value)
        },
        enumerable: true
    }
})

// about.name = "Max"
// delete about.name;
// for(let key in about) {
//     if(about.hasOwnProperty(key)) {
//         console.log("Key:", key, about[key]);
//     }
// }

let acar = Object.create({
    info() {
        console.log("This car is new");
    }
}, {
    brand: {
        value: "BMW",
        enumerable: true
    },
    model: {
        value: 5,
        enumerable: true
    },
    price: {
        value: 25000,
        enumerable: true
    },
    currency: {
        value: "USD",
        enumerable: true
    },
    inside: {
        get() {
            return this.currency;
        },
        set(value) {
            console.log("New currency: ", value);
        }
    }
})

/////////////////////////////////////////////////////////////////
let getError = (node) => {
    node.classList.add("active");
}
let removeError = (node) => {
    node.classList.remove("active");
}

let error = Object.create({}, {
    input: {
        value: document.querySelector(".email__data")
    },
    pass: {
        value: document.querySelector(".email__data--pass")
    },
    content: {
        value: document.querySelector(".error")
    },
    buttonGet: {
        value: document.querySelector(".button")
    },
    show: {
        get() {
            return this.input.addEventListener("input", () => {
                this.content.style.backgroundColor = "red";
                this.content.style.boxShadow = "0px 4px 30px red";
                if(this.input.value.length < 8) {
                    this.content.innerHTML = "Name: minimum 8 value";
                    getError(this.content);
                } else if(this.input.value.length > 8) {
                    this.content.innerHTML = "Name: So much value";
                    getError(this.content);
                } else {
                    removeError(this.content);
                }
            })
        }
    },
    showPassError: {
        get() {
            return this.pass.addEventListener("input", () => {
                this.content.style.backgroundColor = "red";
                this.content.style.boxShadow = "0px 4px 30px red";
                if(this.pass.value.length < 8) {
                    this.content.innerHTML = "Pass: minimum 8 value";
                    getError(this.content);
                } else if(this.pass.value.length > 8) {
                    this.content.innerHTML = "Pass: So much value";
                    getError(this.content);
                } else {
                    removeError(this.content);
                }
            })
        }
    },
    click: {
        get() {
            return this.buttonGet.addEventListener("click", () => {
                if(this.input.value.length == 8 && this.pass.value.length == 8) {
                    this.content.innerHTML = "Your registered";
                    this.content.style.backgroundColor = "green";
                    this.content.style.boxShadow = "0px 4px 30px green";
                    getError(this.content);
                } else if(this.input.value.length != 8 || this.pass.value.length != 8) {
                    this.content.innerHTML = "Need to complete form";
                    setTimeout(() => {
                            removeError(this.content);
                    }, 2500)
                }
                new Promise(resolve => {
                    setTimeout(() => {
                        if(this.content.style.backgroundColor == "green") {
                            resolve(removeError(this.content));
                        }
                    }, 2500)
                    setTimeout(() => {
                        if(this.content.style.backgroundColor == "green") {
                            document.location.reload();
                        }
                    }, 3000)
                })
            })
        }
    }
})

error.show;
error.showPassError;
error.click;

/////////////////////////////////////////////////////////////////
let user = {
    name: "Vadim",
    surname: "Sytnyk",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
}

// user.fullName = "New Name";
// console.log(user.fullName);


let infoUser = {
    get name() {
        return this._name;
    },

    set name(value) {
        if(value.length < 4) {
            console.log("Error!!!");
        } else {
            console.log(this._name = value);
        }
    }
}

// infoUser.name = "Vadim Sytnyk"

let ask = {
    get word() {
        return this._word;
    },

    set word(value) {
        if(value.length < 5 ) {
            console.log("Error: You'll need to wrirte minimum 5 velue");
        } else {
            console.log(this._word = value);
        }
    }
}

// ask.word = "I talked with her on the phone an hour ago here";
// ask.word = "New";

let twoWords = {
    one: "collaborate",
    two: "company",

    get up() {
        return `${this.one} ${this.two}`
    },
    set up(value) {
        [this.one, this.two] = value.split(" ");
    }
}

twoWords.up = "provide requirements";
// console.log(twoWords.up);


function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    })
}

let ketti = new User("Ketti", new Date(2000, 5, 3));
// console.log(ketti.birthday);
// console.log(ketti.age);

////////////////////////////////////////////lesson 7 ES-6 class//////////////////////////////////////////////
// let animal = {
//     name: "Animal",
//     age: 5,
//     hasTail: true
// }

class Animal {

    static type = "ANIMAL"

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log("I'm animal")
    }
}

let animal = new Animal({
    name: "Animal",
    age: 5,
    hasTail: true
})

class Cat extends Animal {
    static type = "CAT"
    constructor(options) {
        super(options)
        this.color = options.color
    }

    voice() {
        super.voice()
        console.log("I'm cat")
    }

    get ageInfo() {
        return this.age * 7
    }

    set ageInfo(newAge) {
        this.age = newAge;
        console.log("NEW")
    }
}

let cat = new Cat({
    name: "Cat",
    age: 7,
    hasTail: true,
    color: "Black"
})

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = "none"
    }

    show() {
        this.$el.style.display = "block"
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + "px"
        this.$el.style.backgroundColor = options.color
    }
}

// let box1 = new Box({
//     selector: "#box1",
//     size: 100,
//     color: "red"
// })

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = "50%"
    }
}

// let cer = new Circle({
//     selector: "#circle",
//     size: 90,
//     color: "green"
// })


//////////////////////////////////////////////////////////////////////////
class Car {
    constructor(options) {
        this.brand = options.brand;
        this.model = options.model;
        this.price = options.price;
        this.color = options.color;
    }

    inform() {
        console.log("I talked with her on the phone an hour ago there");
    }
}

class nextCar extends Car {
    constructor(options) {
        super(options)
        this.allows = options.allows;
    }

    inform() {
        super.inform();
        console.log("And we'll decide to contine to create this project");
    }
}

let bmw = new nextCar({
    brand: "BMW",
    model: "5-siries",
    price: 35000,
    color: "Black",
    allows: true
})


//////////////////////////////////lesson 8 async / await / work with fetch//////////////////////////////////
let provide = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

let url = "https://jsonplaceholder.typicode.com/posts";

// function fetchTodos() {
//     console.log("Fetch todo started...")
//     return provide(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchTodos()
// .then(data => {
//     console.log("Data: ", data);
// })

let fetchAsyncTodos = async () => {
    console.log("Fetch todo started...")
    try {
        await provide(2000)
        let response = await fetch(url)
        let data = await response.json()
        console.log("Data: ", data);
    } catch(e) {
        console.log(e);
    }
}

// fetchAsyncTodos();

//////////////////////////////////lesson 9 Proxy//////////////////////////////////



















