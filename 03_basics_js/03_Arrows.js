const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        // console.log(this);
    }

}
// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     // let username = "hitesh"
//     // console.log(this.username);
//     console.log(this);
// }
// chai()


// const chai = function(){
//     let usrername = "hitesh"
//     console.log(this.username);
// }


//Arrow function :
const chai = () => {
    let usrername = "hitesh"
    console.log(this.username);
}
// chai()


//Basic Arrow function: Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit return:
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4));
