/* This code covers functions in JavaScript, 
including parameters, return values, default parameters,
 rest parameters, passing objects, and passing arrays.*/

 //function declaration
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()   // calling functions


// functions parameters
//function addTwoNumbers(number1, number2){

//    console.log(number1 + number2); }  //print the sum but return nothing hence undefined


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //calling functions

// console.log("Result: ", result);


// default parameters (if no argument passed then username is sam)
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")) //here argument passed hitesh
// console.log(loginUserMessage("hitesh"))

//rest parameter(...)
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//...num1 collects the remaining arguments into an array

// console.log(calculateCartPrice(200, 400, 500, 2000))


//passing an object to a function
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) as user object has prices but the function expects price
handleObject({
    username: "sam",
    price: 399
}) 
// 0/p => username is sam and price is 399

//passing an array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));