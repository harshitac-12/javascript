//we can concatenate string using +

const name ="hitesh"
const repoCount = 50

console.log(name+repoCount +"value") //old method avoid doing this

//string interpolation is  way to insert variables or expression directly into a string without manually concatenating it
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //backtac

const gameName = new String('hitesh-hc-com') //object ban gya(key value pair) adv is that its gives indexing and other properties to operate with

console.log(gameName[0]);
console.log(gameName.__proto__); //prototype access


console.log(gameName.length);
console.log(gameName.toUpperCase()); //methods of prototype
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //front se start krenge and index 4 not included
console.log(newString);

const anotherString = gameName.slice(-8, 4) //back se
console.log(anotherString);

const newStringOne = "   hitesh    "  //we do not want to store space use trim to remove starting and ending whitespace
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //bool included or not

console.log(gameName.split('-')); // hitesh-hc-com got split when - comes and store in array


//visit mdn for more methods