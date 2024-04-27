const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userFullname: {
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obje3 = {obj1, obj2};   //same problem as array

// const obje3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id_1: 1,
        email_1: "h@gmail.com"
    },
    {
        id_2: 1,
        email_2: "h@gmail.com"
    },
    {
        id_3: 1,
        email_3: "h@gmail.com"
    }
]

users[1].email_1
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   //the datatype of the output is array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//Object de-structure and JSON API intro

const course = {
    coursename: "js in hindi",
    price: "99",
    courseInstructor: "hitesh"
}

// course.courseInstructor      //one of the methods
const {courseInstructor: instructor} = course   //object de-structure

// // console.log(courseInstructor);
// console.log(instructor);

// API in jason


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// APIs in form of elements of the array

// [
//     {},
//     {},
//     {}
// ]

