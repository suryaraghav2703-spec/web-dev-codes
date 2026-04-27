console.log("conditional tutorial")

let age = 45;
// let age = 5;
if(age>18){
    console.log("you are eligible to vote");
}

else{
    console.log("you are not eligible to vote");
}


let umar = 17;
let grace = 2;
console.log(umar + grace)
console.log(umar - grace)
console.log(umar * grace)
console.log(umar / grace)
console.log(umar % grace)
console.log(umar ** grace)

if((umar+grace)>18){
    console.log("you can drive");
}

else{
    console.log("you cannot drive");
}


// if else if else ladder
let age1 = 17
if(age1 != 18){
    console.log("you are not 18");
}

else if(age1 == 0){
    console.log("are you kidding?????");
}

else if(age1 == 1){
    console.log("you are a baby");
}
else{
    console.log("you are 18");
}

//  ek line mai conditons likhna is ternary statement
a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translate to :
if(a>b){
    let c = a - b;
}

else{
    let c = b - a;
}
*/
