// 2 > 1 ; 2>=1 ; 2 == 1 ;



console.log("2" > 1); //true but use same datatype some time gives error



console.log(null > 0); //false

console.log(null == 0)  //false

console.log(null >= 0)  //true (unwanted results here)



// the reason is that an equality check == and comparisons > < >= <= works differently

// comparisons converts null to a number ,treating it as 0.

// that's why (3) null>=0 is true and (1) null>0 is false





console.log(undefined == 0) ;//false //avoid doing this 

console.log(undefined < 0) ;

console.log(undefined > 0) ;