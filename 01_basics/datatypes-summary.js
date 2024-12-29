//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n    n is used to make bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
let myyoutube="hiteshchaudharydotcom"
let anothername=myyoutube
anothername="chaiorcode"
console.log(anothername);
console.log(myyoutube);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//stack give copy of object whereas heap gives reference to original object
//stack(primitive),heap(non primitive)
