// singleton
// object created using Object.create often  referred to as singleton objects in js 
// as they are created through a constructor/factory rather than a literal.

// object literals=> const obj ={}
const mySym = Symbol("key1")
//symbol is a unique and immutable primitibe value

const s1 = Symbol("id")
const s2 = Symbol("id")
console.log(s1===s2)  //false
//even though both have the same description ("id"),they are different symbols

//object literal
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //symbol declaration
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//accesing properties from object litrals
 console.log(JsUser.email)// w/o brackets works for valid js identifiers
 console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym]) //accesing symbol

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)  //this makes the objects immutable
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());