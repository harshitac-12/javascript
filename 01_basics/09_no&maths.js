const score = 400 // automatically defined as number 
console.log(score);

const balance = new Number(100)  //explicitly defined typeof data using new
console.log(balance);

console.log(balance.toString().length); //string ban gya
console.log(balance.toFixed(1));  //after decimal how many value here 100.0 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //precision do till 4 number starting from left

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //comma lag jayega in hundreds 

// +++++++++++++ Maths +++++++++++++++++++++++++++++
// comes default with js

 console.log(Math); //object
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //upper value
console.log(Math.floor(4.9));//lower value
 console.log(Math.min(4, 3, 6, 8));
 console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // decimal value b/w 0 to 1
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) ); //genrate random integer b/w 0 to 9
//add 1
console.log(Math.floor(Math.random()*10) + 1); //generate random integer b/w 1 to 10
// we want random no. betwenn min and max
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//use inspect=>console for properties and methods