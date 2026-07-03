//learning about variables in js
const accountId = 12345
let accountEmail="harshi@gmail.com";
var acoountpassword="897666";
accountcity="jaipur"   //js is memory family variables can be declare w/o using let
let accountstate; //if not declared stored as undefined;

//  accountID=2  we cant change value of const ,it is fixed
/*both let and var use for variables, but var is no longer 
in use due to block scope{} and functional scope*/
accountpassword="87666";
accountcity="bangluru";

console.log(accountId);
console.table([accountId,accountEmail,accountpassword,accountcity,accountstate]);