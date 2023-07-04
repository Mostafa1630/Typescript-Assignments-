#######Assigment TypeScript##########

#1
function calculate(numOne: number, numTwo: number): number {
    return numOne + numTwo;
}
    console.log(calculate(10, 20)); // 30
    console.log(calculate("10", "20")); // We Don't Need This To Work
    console.log(calculate(+true, +true)); // 2


#2
type numAndSt = string | number;
function printInfo(valueOne: numAndSt, valueTwo: numAndSt) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
  console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
  console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
  console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work


#3
let arr: (number | boolean[] | (string | (string | number)[])[])[];
let arr: (number | boolean[] | (string | (string | number)[])[])[] = [1 , [true , false] , ["Mostafa" , [1 , 2 , 3]]];


#4
function reportErrors(username: string, age: number) {
    let rank = "Professor";
    return `Username: ${username}`;
    console.log("We Will Not Reach Here");
}
console.log(reportErrors("Elzero", 40));


// #5
let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(undefined , undefined , theName)); // Elzero


// #6
function showMsg(user?: string, age?: number | string, country?: string) {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));


// #7
// Write The Function Here
type al = number | string | boolean;
function printInConsole(...all : al[]): string{
    return all.forEach((el) => `The Value Is ${el} And Type Is ${typeof el}`);

}
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

Output
The Value Is 1 And Type Is number
The Value Is 2 And Type Is number
The Value Is 3 And Type Is number
The Value Is 4 And Type Is number
The Value Is 5 And Type Is number
Done
The Value Is A And Type Is string
The Value Is B And Type Is string
The Value Is C And Type Is string
Done
The Value Is true And Type Is boolean
The Value Is false And Type Is boolean
The Value Is false And Type Is boolean
The Value Is true And Type Is boolean
The Value Is true And Type Is boolean
Done



############## Assigmrnts TypeScript Week 2##########

1
// Write Your Code Here

// Do Not Edit Here
type n = number;
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here




2- // Write Your Code Here

// Do Not Edit Here
type mix = (number | boolean);
let myInfo: mix;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here


// 3

// Write Your Code Here

// Do Not Edit Here
type Info = {
    theName:string,
    theAge:number
}

function showInfo(data: Info) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

type Full = {
    theName:string,
    theAge:number,
    country:string
}
function showFullInfo(data: Full) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));




// 4
function yesOrNo(val: number) : "Yes" | "No" {
    if(val > 10){
        return "Yes";
    }else{
        return "No";
    }

}

  // Do Not Edit Here
  console.log(yesOrNo("100")); // Error
  console.log(yesOrNo(30)); // True
  console.log(yesOrNo(8)); // False


// 5

function isHeOld(age: number) : "Yes" | "No" {
    if(age > 40){
        return "Yes";
    }else{
        return "No";
    }
}

  // Do Not Edit Here
  console.log(isHeOld("100")); // Error
  console.log(isHeOld(45)); // "Yes"
  console.log(isHeOld(30)); // "No"




// 6


// let post : [number, string , boolean] = [100, 200, "Title"]; // Error
// let post : [number, string , boolean]  = ["Title", 100, true]; // Error
let post :readonly [number, string , boolean]  = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here

const [id , title , state] = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true



// #7

const user: {
    username: string,
    age: number | string,
    website?: string,
    skills: {
        frontEnd: string[],
        backEnd: (string | number)[]
    }
} = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
}

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);




#########Assigment Week 3##################

#1
// Edit The Interface To Fix The Problems
interface Member {
    id: number | string;
    username: string;
    country: string;
    state: boolean;  // Remove readonly
    getName():string;
}

  // Do Not Edit The Code Below
let user: Member = { // Property 'country' is missing in type
    id: 100,
    username: "Elzero",
    state: true,
    getName() { // 'getName' does not exist in type 'Member'
        return this.username;
    }
}

user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property


#2
// Create Interface Here
interface Client{
    id: number,
    username: string,
    active: boolean,
    discount: number,
    getPrice(price: number) : number;
}
// Do Not Edit The Code Below
let client: Client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price: number) {
        return price - this.discount;
    }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// #3
// Do Not Edit The Code Below
interface Man {
    title: string;
    weight: number;
    age: number;
}

interface Bird {
    canFly: boolean;
}

interface Superman extends Man , Bird{
    bodyType: string,
    origin: string
}

let creature: Superman = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
}


// #4
// Create Class Here

// Do Not Edit The Code Below
class Player{
    public n: string;
    public t: string;
    public g: number | string;
    public a: boolean;
    constructor(name: string , type: string , age:number | string , avliable : boolean = false){
        this.n = name;
        this.t = type;
        this.g = age;
        this.a = avliable;
    }
    details():String {
        return `VIP ${this.n}, Type Is ${this.t} Level Is ${this.g}`;
    }
}
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77



// #5
class Shorten {
    constructor (public id: number,public username: string,protected title: string) {}
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);


// #6
class Show {
    constructor (private _title: string) {}
    get title():string{
        return this._title;
    }

    set title(value){
        this._title = value;
    }
}

let tester = new Show("Elzero");

  console.log(tester.title); // Property 'title' does not exist on type 'Show'
  tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
  console.log(tester.title); // Property 'title' does not exist on type 'Show'



// #7

interface Play {
    id: number;
    title: string;
    level: number | string;
    logIn(): void;
    logOut(msg: string): void;
}

// Create Your Class Here

class Player implements Play{
    constructor(public id: number,public title: string,public level: number | string){}
    logIn(): void{
        console.log("Logged In");
    }
    logOut(msg: string): void{
        console.log(`Logged Out,${msg}`);
    }
}



let player1 = new Player(100, "Elzero", 95);

  console.log(player1.id); // 100
  console.log(player1.title); // "Elzero"
  console.log(player1.level); // 95
  player1.logIn(); // Logged In
  player1.logOut("Good Bye"); // Logged Out, Good Bye



######## Assigment Week 4 ###########

// #1

// Do Not Edit
type numandstring = number | string;

abstract class Game {
    constructor(public title: string, public price: numandstring) {}
    abstract getLocation() : string;
    abstract getDiscount() : string;
}

// Start Edit And Fix
class RPG extends Game {
    constructor(title: string,price: numandstring, public rate: number) {
        super(title,price);
    }
    getLocation() : string{
        return `Location`
    }
    getDiscount() : string{
        return `Discount`;
    }
}

class Action extends Game {
    constructor(title: string,price: numandstring, public rate: number , public company : string) {
        super(title,price);
    }
    getLocation() : string{
        return `Location`
    }
    getDiscount() : string{
        return `Discount`;
    }
}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"


// #2
// Write Function Code Here
function showTypes<T , S , M>(str:string = "Nothing" ,ag:number = "Nothing" ,aval:boolean= "Nothing"): string{
    return `${str} - ${ag} - ${aval}`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true


// #3

// Write Class Code Here
class Game<T>{
    constructor(public title: T , public price : number){}
    getDiscount(msg : number | string) : string {
        return `The Discount Is ${msg}`;
    }
}
// Do Not Edit Here
let gameOne = new Game<string>("Ys", 100);
let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"















// console.log(Math.floor(1.2));


// var num = 10;
// num = "mostafa";
// console.log(num);



// let theName:string = "Mostafa";
// let theAge:number = 20;
// let dir:boolean = true;
// let all:any;




// function add(n1:number , n2:number){
//     return n1 + n2;
// }
// // console.log(add(10,"20"));
// console.log(add(10,20));


// let arr = ["a" , 1 , true , [true , false , ["m"]] , 5];




// function showDetails(name , Age , salary): string{
//     // let test = 10;
//     if(salary > 7000){
//         return `Good ${name}`;
//     }
//     return `Mostafa Maher`;
// }



// let add = function( num1: number , num2:number ):number {
//     return num1 + num2 ;
// }

// console.log(add(10,20));


// // Arrow Function With Annoation 
// let addwithArrow = ( num1: number , num2:number ):number =>  num1 + num2 ;

// console.log(addwithArrow(10,20));




// Type Alias 
// type st = string;
// type stAndNum = (string | number);

// let ar:stAndNum[] = ["a",1]



// // ##### Tuple [15]

// let article:readonly [number , string , boolean ] = [11 , "title one" , true];
// // ## readonly ===> to read only and not update or delete or any thing

// // article.push(8000);

// console.log(article);

// const [id , title , published] = article;

// console.log(id);
// console.log(title);
// console.log(published);


// enum level{
//     kids = 15,
//     easy = 9,
//     medium = 6,
//     hard = 3
// }

// console.log(level.kids);

// function retNumber():number {
//     return 3;
// }


// enum kid{
//     five = level.medium,
//     six = five,
//     seven = level.hard,
//     ten = retNumber()
// }

// console.log(kid.five);
// console.log(kid.six);
// console.log(kid.seven);
// console.log(kid.ten);


// Video 21
// let myObject :{
//     userName:string,
//     age:number,
//     nestedObject:{
//         name:string
//     }
// } = {
//     userName:"Mostafa",
//     age:20,
//     nestedObject :{
//         name:"maher",
//     }
// }


// //  // Video 22 & 23
// interface User{
//     id?:number;
//     readonly userName:string;
//     country:string;
//     sayHello():string;
//     hell: () =>  string;
//     getDouble(num:number) : number;
// }

// //  To Take An Object
// let user:User = {
//     id:8,
//     userName:"Mostafa",
//     country:"EGYPT",
//     sayHello() {
//         return `Hello ${this.userName}`
//     },
//     hell : () => `Hello ${user.userName}`,
//     getDouble(n){
//         return n*2;
//     },
// }




// Part Of Generica

// function retrunNumber(val : number):number{
//     return val;
// }

// function retrunString(val : string):string{
//     return val;
// }

// function retrunBoolean(val : boolean):boolean{
//     return val;
// }


// // function retrunType <GenericType>(val : GenericType):GenericType{
// //     return val;
// // }

// function retrunType <T>(val : T):T{
//     return val;
// }

// console.log(retrunType<number>(100));
// console.log(retrunType<string>("Mostafa"));
// console.log(retrunType<boolean>(true));

// const retrunTypeArrowSyntax = <T> (val : T) : T => val;


// function retrunType <T>(val : T):string{
//     return `The Value Is ${val} And The Type Is ${typeof val}`;
// }

// console.log(retrunType<number>(100));
// console.log(retrunType<string>("Mostafa"));
// console.log(retrunType<boolean>(true));

// function multipleType <T , S>(val1 : T , val2:S):string{
//     return `The Value Frist ${val1} And The Value Second ${val2}`;
// } 

// console.log(multipleType <string , number>("Mostafa" , 8000));
// console.log(multipleType <number , boolean>(8000 , true));



// Generics Class

// class User<T>{
//     constructor(public value: T){}
//     show(msg : T): void{
//         console.log(`${msg} - ${this.value}`);
//     }
// }

// let userOne = new User<string | number>("Mostafa");
// userOne.show(10000);

