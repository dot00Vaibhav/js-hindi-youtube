//singleton :- "const tinderUser = new Object()"
// Object.create :- the object is created through constructor method

//objects literals
const mySym = Symbol("keys1")

const JsUser = {
    name : "hitesh",
    [mySym] : "mykey1",   // by using the square brackets we can now refer to the above symbol
    "full name" : "Hitesh Chaudhari",
    age : 20,
    location : "Delhi",
    email : "vaibhavtiwari123vt1@gmail.com",
    isLoggedIn : false,
    lastloginDays : ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);    //because initially the variable created inside the objects will be a string
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "vaibhavtiwari@chatgpt.com"
// Object.freeze(JsUser)   //it freezes the object and no change can be done further
JsUser.email = "vaibhav@microsoft.com"  //throws error in the strict mode
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
