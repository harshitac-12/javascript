/* Immediately Invoked Function Expressions (IIFE)
An Immediately Invoked Function Expression (IIFE) is a function that:
Is defined.
Is executed immediately after it's created.*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')