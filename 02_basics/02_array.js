

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // if will take dc_heros elements as single element for marvels_heros length become 4

console.log(marvel_heros);
console.log(marvel_heros[3]); //["superman","flash","batman"]

 console.log(marvel_heros[3][1]); //flash

 //concat: create a new array ,original remains unchanged
 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);


 //spread operator(...),same work as concat, it is more flexible
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);


//nested array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//flat(infinity) removes all nesting
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//.isarray checks whether something is an array 
console.log(Array.isArray("Hitesh"))

//converts an iterable(string,map,set) into a array
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting gives []
//{ name: "hitesh" } is a plain object—it is neither iterable nor 
// array-like object (it has no numeric length property). 
// Therefore, Array.from() has nothing to iterate over, so it returns an empty array.

Object.keys({name: "hitesh"})
Object.values({name: "hitesh"})
Object.entries({name: "hitesh"})


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

//Array.of() creates a new array from the provided arguments.


