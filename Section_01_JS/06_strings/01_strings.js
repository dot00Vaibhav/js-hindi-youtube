const name = "hitesh"
const repoCount = 50

// console.log(name + " has " + repoCount + " repositories.");//not recommendalbe to use in modern days

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newstring = gameName.substring(0, 4)
console.log(newstring);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);// output should be "ite"

const newStringOne = "    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//removes the starting and ending spaces of the variable

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20' , '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));