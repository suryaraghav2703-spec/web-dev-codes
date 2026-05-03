let a = 6;

function factorial(number) {
    // Handle negative numbers
    if (number < 0) {
        return "Factorial is not defined for negative numbers";
    }

    // Handle 0
    if (number === 0) {
        return 1;
    }

    let arr = Array.from(Array(number + 1).keys());
    let c = arr.slice(1).reduce((a, b) => a * b, 1); // added initial value 1
    return c;
}

function facfor(number) {
    // Handle negative numbers
    if (number < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let fac = 1;

    // loop will automatically handle 0 (won't run, returns 1)
    for (let index = 1; index <= number; index++) {
        fac = fac * index;
    }

    return fac;
}

console.log(factorial(a));
console.log(facfor(a));
