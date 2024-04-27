function sayMyName(){
    console.log("Hello world 1");
    console.log("Hello world 2");
    console.log("Hello world 3");
}
// sayMyName       //reference of the function
// sayMyName()     //call to a function


// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3, 4)


// function addTwoNumbers(number1,number2){
//     let result = number1 + number2
//     return result
// }
// const result = addTwoNumbers(3, 4)
// console.log("Result: ",result);


function logInUserMessage(username){
    if(!username){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage("Vaibhav"));
// console.log(logInUserMessage());


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));
// NOTE :- rest and spread operator are accessed using the "..." but the usecase decides whether it is spread or rest.


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



