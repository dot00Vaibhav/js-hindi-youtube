//primitive 

// 7 types : string , number , boolean , bigInt , null , undefined , symbol

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId);

const bigNumber = 32874212618713816n

// Reference :- Non primitive
// array , objects , functions

const heros = ["shaktiman" , "naagraj", "doga"];
let myObj = {
    name : "vaibhav",
    age : 20,
}

const myFunction = function(){
    console.log("Hellow world");
}


// *****************************************************************

// Stack(Primitive) , Heap(Non-Primitive)
let myYoutubeChannelName = "hiteshChoudharydotcom"
let anothername = myYoutubeChannelName
anothername = "chaiaurcode"
// console.log(myYoutubeChannelName);
// console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);