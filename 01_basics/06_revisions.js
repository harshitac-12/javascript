/*
on the basis of how the data store in memory accessed from it 
1.primitive

// 7 types : strings , int , bool , null , undefined, symbol,BigInt
*/
const score =100
//symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

const BigNumber = 123456777644n //big int


//reference (Non primitive)

//Array ,Objects, functions

const heros = ["Shaktiman","doga"];
let myObj = {
    name : "hitesh",
    age: 22.
}

const myfunction = function(){
    console.log("hello world")}

    //how to find type of data
    console.log( typeof BigNumber)

    //typeof
    //undefined=> undefined
    //NULL =>objects
    //boolean => boolean
    //number => "number"
    //string => "string"
    //symbol => "symbol"
    //function =>function (  object function)


    // javascript is dynamically type lang means that variable type are automatically assigned at runtime and you do not need to
    // declare the type of variable using it .you can assign different types of values to a variable during its lifetime
    // let x=10 int
    //x =" hello" string
    //x= true ; bool

    // statically type : specify variable type explicitly 
    // int x=10 ;
// string name="nama";

