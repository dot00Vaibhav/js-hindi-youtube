// array :- The Array object, as with arrays in other programming languages,
// enables storing a collection of multiple items under a single variable
// name, and has members for performing common array operations.

const myArr = [0,1,2,3,4,5]

// console.log(myArr[0]);
//zero based indexing
//during the copy operation in the array it will make shllow copy.
//shallow copy :- it is the copy of the object who shares the same reference point.
//Deep copy :- where properties do not share the same reference point.

//different types to declare the array
const myArr2 = new Array(1,2,3,4,5)
const myHeroes = ["shaktimaan" , "nagraj"]
// console.log(myArr[1]);

// Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//puts the value to the start of the array
// myArr.shift()//removes the firts value of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);//join convert our array into string and also bind them together with comma separated




//slics , splice

console.log("A ",myArr);        //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)
console.log(myn1);              //[ 1, 2 ]

console.log("B ",myArr);        //B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);        //C  [ 0, 4, 5 ]
console.log(myn2);              //[ 1, 2, 3 ]
