// var c = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("Inner a : ",a);
}

// console.log(b);
// console.log(a);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}
// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // error
}
// console.log(username);    // error


//+++++++++++++++++++++ interesting +++++++++++++++++++++

addOne(5)//this can be done in case of this type of function defination
function addOne(num){
    return num+1
}

addTwo(5)//can not access before initialisation
const addTwo = function(num){
    return num + 2
}
