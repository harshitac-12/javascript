
 // ********************operations *********************
 //why string to number conversion is confusing
 let value = 3
 let negValue = -value;
 //console.log(neg.value)
//basic operations
//  console.log(2+2);
//   console.log(2*2);
//    console.log(2-2); 
//    console.log(2**2);
//     console.log(2/2);
//      console.log(2%2);

let str1="helo";
let str2 = " hello"

let str3 =  str1+str2; //easily execute but

console.log("1" + 2 );//12
console.log(1 + "2");  //12
console.log("1"+2+2) //122 convert to string if first is string
console.log(1+2+"2")// 32 first operated aage wale then concatenate if string is last
 console.log((5*3)+3+1) //write clear code use parenthesis
//tricky code conversion (do not use while writing programs)
console.log(+true) //1 
//console.log(true+) //gives error

console.log(+" ") ; //0

let num1 , num2 ,num3 
num1 = num2 = num3 = 2 + 2;

let gameCounter =100 
gamecounter++; // The variable’s current value is used first in the expression, and then it is updated afterward.
++counter; // The variable is updated first, and then the new value is used in the rest of the expression.
console.log(gameCounter);  //101
