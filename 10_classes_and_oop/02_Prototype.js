// let myName = "hitesh     "
// let myChannel = "chai    "

// console.log(myName.length);
// console.log(myName.trueLength);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// // heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// // heroPower.heyHitesh()



//Inheritance
const User = {
    name:"chai",
    email:"chai@google.com"
}
 const Teacher = {
    makeVideo: true
 }
 const TeachingSupport = {
    isAvailable: false
 }
 const TAsupport = {
    makeAssignment: 'JS ASSIGNMENT',
    fullTime: true,
    __proto__: TeachingSupport
 }
Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)  //