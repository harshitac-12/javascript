// Dates

let myDate = new Date() //objects 
 console.log(myDate.toString());
console.log(myDate.toDateString()); //Sun Jul 05 2026
console.log(myDate.toLocaleString());//7/5/2026 ,1:30pm
console.log(typeof myDate);

//creating custom date
// months and week day start from 0 
let myCreatedDate = new Date(2023, 0, 23) //{year,month,date}
let myCreatedDate = new Date(2023, 0, 23, 5, 3) //{year,month,date,hours,mins}
let myCreatedDate = new Date("2023-01-14") //ISO format  => sat Jan 14 2023
let myCreatedDate = new Date("01-14-2023") //us format MM-DD-YYYY
 console.log(myCreatedDate.toLocaleString());



 //return the milliseconds since jan 1,1970 (unix epoch)
let myTimeStamp = Date.now() //current time stamp (milli seconds)
 console.log(myTimeStamp);

 //timestamp of another date
 console.log(myCreatedDate.getTime());

 //convert miliseconds to seconds,maths,floor removes decimal part
 console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//+1 as months start from 0
console.log(newDate.getDay());

//temporal literals 
 `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
}) 
//formats the data acc to locale setting and requests the full weekday name

//combining multiple fomatting options
console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
);