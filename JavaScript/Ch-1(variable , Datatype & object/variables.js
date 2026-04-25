console.log("This is a JavaScript file that demonstrates the use of variables.");

var a = 5;
var b = 6;
var c = "surya";
// console.log( a + b + 8)
var sum = a + b;
console.log("The sum of", a, "and", b, "is:", sum);
console.log(typeof a , typeof b , typeof c);

// var 55a = "rohan"; // Invalid variable name
// var a@ = "rohan"; // Invalid variable name
// var a b = "rohan"; // Invalid variable name
// var a-b = "rohan"; // Invalid variable name
// var a.b = "rohan"; // Invalid variable name
// const a1 = 6;
// a1 = a1 + 1; // Invalid assignment ,because a1 is a constant
// so use let() instead

let a1 = 6;
a1 = a1 + 1; // Valid assignment
console.log(a1);
{
    let a1 = 10;
    console.log(a1);   
}
console.log(a1);
// now a1 is 7 but in {} a1 is 10 because let() is block-scoped.

