function makePizza() {

console.log("Starting pizza order...");

setTimeout(() => {

console.log("Dough is ready.");

setTimeout(() => {

console.log("Sauce and cheese added.");

setTimeout(() => {

console.log("Toppings added.");

setTimeout(() => {

console.log("Pizza is in the oven.");

setTimeout(() => {

console.log("Pizza is ready! ");

}, 2000);

}, 1000); }, 1000); }, 1000); }, 1000);

}

makePizza()