console.log("Tutorial on loops");

let a = 1;
console.log(a);
console.log(a + 1);  // this process can go very long and can become difficult to manage or can be laggy. 
console.log(a + 2);

//  loops construct to avoids this 
for(let i = 0; i < 100; i++){
    console.log(a + i);
}

let obj = {
    name:  "surya",
    role:  "developer",
    company:  "ABC Corp"
}
// for...in loop
for (const key in obj){
    const element = obj[key];
    console.log(key, element);
}

// for...of loop
for (const c of "surya"){
    console.log(c);                // logs each character in the string "surya"
}

// while loop
let i = 0;
while(i<6){
    console.log(i);
    i++;
}

//do while loop
let j = 0;
do{
    console.log(j);
    j++;
}while(j<6);

