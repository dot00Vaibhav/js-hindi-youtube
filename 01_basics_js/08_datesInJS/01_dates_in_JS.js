//dates

let myDate = new Date()
// console.log(myDate.toString());// Wed Apr 17 2024 18:15:39 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());// Wed Apr 17 2024
// console.log(myDate.toLocaleDateString());// 4/17/2024
// console.log(myDate.toISOString());// 2024-04-17T18:15:39.341Z
// console.log(myDate.toJSON());// 2024-04-17T18:15:39.341Z
// console.log(myDate.toUTCString());// Wed, 17 Apr 2024 18:15:39 GMT

// console.log(typeof myDate);// Object

// let myCreatedDate = new Date(2023 , 0, 23)//months starts from "0" in javaScript
// console.log(myCreatedDate.toDateString());// Mon Jan 23 2023

// let myCreatedDate = new Date(2023 , 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());// 1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());// 1/14/2023, 12:00:00 AM

let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());// 1/14/2024, 12:00:00 AM


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()); // 3 (as month is starting from 0)
// console.log(newDate.getDay()); // 3

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday : "long"
    
})