// create array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) //object create ,hence index fetch can be done
 console.log(myArr[1]);

// Array methods

 myArr.push(6) //add element at end
 myArr.push(7)
 myArr.pop() //delete from last

 myArr.unshift(9) // add element at the beginning
 myArr.shift()    //remove the first element

 console.log(myArr.includes(9)); //bool ans
/console.log(myArr.indexOf(3)); //giveindex

const newArr = myArr.join() // converts the array into a string

 console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);  // A [0,1,2,3,4,5]

//slice(start,end) end not included

const myn1 = myArr.slice(1, 3) //array.slice(start,end)
//create a copy of a portion of the array and does not change the original array

console.log(myn1); // 1 2
console.log("B ", myArr); // B [0,1,2,3,4,5]

//changes the original array by removing,inserting or replacing elementss

const myn2 = myArr.splice(1, 3) //splice(start,deleteCount)
console.log("C ", myArr); // C[0 4 5]
console.log(myn2); //1 2 3 