//var c = 300
let a = 300 //global scope
if (true) {
    let a = 10  //local scope
    const b = 20
    // console.log("INNER: ", a); //o/p => is 300 cause let and const are block scoped
    // var is not block scoped and not prefered
}



// console.log(a);
// console.log(b);
// console.log(c);

//nested functions(lexical scope)
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
     console.log(website); // reference error as outer function cannot access variables declared inside the inner function.

     two()  // inner functions can access variables from outer functions (parents -> child)  this is k/a lexical scope

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); //hitesh youtube
    }
    // console.log(website); //reference error
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
//hoisting 

console.log(addone(5))

function addone(num){
    return num + 1   // o/p =>6
}
//function declarations are hoisted, js first loads the function into memory before executing the code



addTwo(5)
const addTwo = function(num){
    return num + 2
}
//reference error 
//because const addTwo is created during the memory phase but remains in the Temporal Dead Zone (TDZ) until its initialization line is reached.