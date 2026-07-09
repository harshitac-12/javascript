/* This code covers Object creation, nested objects, merging objects,
 arrays of objects, object utility methods,
  and object destructuring—all common JavaScript interview topics.*/


  //creating an object
const tinderUser = new Object() //empty object

//creating an empty object using (object literal {})
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); //print id ,name ....


//nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
 
//access
console.log(regularUser.fullname.userfullname.firstname);
  

//merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//method 01=> incorrect for merging(It creates an object with two properties (obj1 and obj2), rather than combining their contents.)
// const obj3 = { obj1, obj2 }

//method 02=>object.assign()
const obj3 = Object.assign({}, obj1, obj2, obj4)

//method 03 => spread operator (modern and most used)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//check properties exists directly on object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//object destructing => extracts a property into a variable
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//Extracts and renames the variable
const {courseInstructor: instructor} = course  //create a variable instructor equivalent to const courseInstructor = course.courseInstructor

 //console.log(courseInstructor); //throw reference error 
console.log(instructor);//hitesh
 

//JSON(javascript object notion)

// Rules:

// Keys must be enclosed in double quotes (").
// Values can be strings, numbers, booleans, arrays, objects, or null.
// Functions are not allowed.
// no undefined
//  {     
//     "name" : "hitesh",
//      "coursename" : "js in hindi",
//     "price" : "free"
//  }



 //JSON array containing 3 objects
[
    {},
    {},
    {}
]



/*JSON is a lightweight text format 
used to store and exchange data between applications, servers, and APIs.

Although it looks similar to a JavaScript object, 
JSON is just plain text, not a JavaScript object. */