/* create a faulty calculator
This faulty calculator does following:
1. It take two numbers as input from the user 
2. It performs wrong operations as follows:
+ -----> -
* -----> +
- -----> /
/ -----> **

It performs wrong operations 10% of the times

*/

// METHOD ONE WITH OBJECTS :--

// let random = Math.random();
// let a = prompt("Enter first number")
// let c = prompt("Enter operations")
// let b = prompt("Enter second number")


// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",
// }

// if(random < 0.1) {
//     // perform wrong operation
//     alert(`the result is ${eval(`${a} + ${c} + ${b}`)}`)
// } else {
//     // perform correct operation
//     c = obj[c];
//     alert(`the result is ${eval(`${a} + ${c} + ${b}`)}`)
// }



//  METHOD 2 WITH IF ELSE CONDITIONS :--

let num1 = Number(prompt("Enter first number"));
let op = prompt("Enter Ooperator(+, -, *, /)");
let num2 = Number(prompt("Enter Second number"));

let isFaulty = Math.random() < 0.3;

if(isFaulty){
    console.log("Faulty injected");

    if(op === "+") op = "-";
    else if(op === "-") op = "*";
    else if(op === "*") op = "/";
    else if(op === "/") op = "+";
}

let result;

switch(op){
    case "+": result = num1 + num2;
break;
    case "-": result = num1 - num2;
break;
    case "*": result = num1 * num2;
break;
    case "/": result = num1 / num2;  
break;
    default:
        console.log("Invalid operator");
        result = 0;          
}
console.log("Result:", result);