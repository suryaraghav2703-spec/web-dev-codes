console.log("This is a string tutorial");
let a = "shreya";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
// console.log(a[6]);   // This will be undefined because there is no index 6 in the string "shreya"

console.log(a.length);  // This will give the length of the string "shreya" which is 6

let name = "surya";
let friend = "shreya";
console.log("His name is " + name + " and his friend's name is " + friend);
console.log(`His name is ${name} and his friend's name is ${friend}`);

let b = "shivam";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.slice(1, 5));
console.log(b.slice(1));
console.log(b.replace("shivam", "shivani"));
console.log(b.replace( "sh" , "77"));
console.log(b.concat(a, "shivani", "shivam", "surya"));
console.log(b);