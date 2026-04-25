let x = "surya ";
let y = 22;
let z = 33.5;
const p = true;
let q = undefined;
let r = null;
console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);


// objects

let o = {
    "name": "Surya",
    "job role": "Developer",
    "age": 30
}
console.log(o);
o.salary = "50000"
console.log(o);
o.salary = "60000";     // you can also insert in objects and can update them or change values like i did for salary.
console.log(o);


let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        console.log("Car started");
    }
};

console.log(car);
console.log(car.make);
car.start();

