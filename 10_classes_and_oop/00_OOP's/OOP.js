const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function(){
        // console.log("Got User details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);  //this :- It tells about the current context
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()
// This "new" keyword allows us to make multiple instances using only one object literals


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn;

    return this
}

// const userOne = User("vaibhav",12,true)
// const userTwo = User("chaiAurCode",11,false)
// console.log(userOne);

//In above the overwriting is happening because we are not using the constructor function for every new variable

const userOne = new User("vaibhav",12,true)
const userTwo = new User("chaiAurCode",11,false)
// console.log(userOne);
// console.log(userTwo);

// "new" keyword :- working mechanism
// step(1): the empty objed is created which is known as the instance
// step(2): constructor function is called because of the construcot function which give a pack of arguments in it to use accordingly
// step(3): arguments are injected inside the "this" keyword

console.log(userTwo.constructor); //constructor property is property about the own reference
// study about the method "instanceof" in mdn



