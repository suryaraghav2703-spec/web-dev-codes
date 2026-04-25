alert("Hello, World!");

// console.log() ke saath saath console.error() , console.warning(), console.info() bhi hota hai but mostly console.log() use hota hai 
// you can see excution of your script console.log() ke through and it makes debugging easy
console.log("code is running...");
console.log(" code is also running...");
console.log("code is tired of running... haha")

// prompt
var a = prompt("Enter a number:");
console.log("You entered:", a);

var isTrue = confirm("Are you sure you want to leave this page and blast your computer?");
if (isTrue) {
    console.log("computer is blasting");
}
else{
    console.log("computer is safe , good boy :)");
}
// prompt and confirm are only available in the browser , you cannot use them in Node.js

// changing styles is done using the style property of DOM elements
document.title = "java script introduction"
document.body.style.backgroundColor = "lightblue";

// This is introduction to javascript 
// in this i learned about what is javascript?
// features of javascript
// var , let,  const
// console use
// prompt and confirm
// changing styles